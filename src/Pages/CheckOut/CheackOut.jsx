import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet";


const CheackOut = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()   
    const navigate = useNavigate();


    const {
      data: cart = [],
      refetch,
    } = useQuery({
      queryKey: ["userCart"],
      queryFn: async () => {
        const { data } = await axiosSecure(`/userCart/${user.email}`);
        return data;
      },
    });
  
    // Calculate total price
    const totalPrice = cart.reduce((sum, item) => sum + item.per_unit_price * item.count, 0);

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosSecure, totalPrice])

    // conbained carts id and count
    const combinedCartInfo = cart.map(item => ({
        sellerEmail: item.sellerEmail,
        count: item.count,
        name: item.name,
        itemId: item._id,
        price_per_unit: item.
        per_unit_price
      }));

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            setError('');
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id);

                // now save the payment in the database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), // utc date convert. use moment js to 
                    cartInfo: combinedCartInfo,
                    status: 'pending'
                }

                const res = await axiosSecure.post('/payments', payment);
             
                refetch();
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for the taka paisa",
                        showConfirmButton: false,
                        timer: 1500
                    });
                   navigate('/invoice')
                }

            }
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <Helmet>
                <title>Checkout</title>
            </Helmet>
        <CardElement
            options={{
                style: {
                    base: {
                        fontSize: '20px',
                        color: '#1E90FF',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                },
            }}
        />
        <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
            Pay
        </button>
        <p className="text-red-600">{error}</p>
        {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
    </form>
    );
};

export default CheackOut;