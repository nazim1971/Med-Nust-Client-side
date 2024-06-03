import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Title from "../../components/Title";
import CheackOut from "./CheackOut";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div>
           <Title subTitle={'Please Payment to Buy Medicine'}  title={'Payment'} />
            <div>
                <Elements stripe={stripePromise}>
                    <CheackOut></CheackOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;