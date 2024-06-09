import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";

import LoadingSpinner from "../../components/LoadingSpiner";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const Cart = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()

  //cart items filter by user email
  const {
    data: cart = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/userCart/${user.email}`);
      return data;
    },
  });



  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.per_unit_price * item.count, 0);

  // Handle increase item count
  const handleIncrease = async (itemId) => {
    try {
      await axiosSecure.put(`/cart/increment/${itemId}`);
      refetch(); // Refresh the cart data
    } catch (error) {
      console.error('Error increasing count:', error);
    }
  };

  // Handle decrease item count
  const handleDecrease = async (itemId) => {
    try {
       await axiosSecure.put(`/cart/decrement/${itemId}`);
      refetch(); // Refresh the cart data
    } catch (error) {
      console.error('Error decreasing count:', error);
    }
  };

  if (isLoading) return <LoadingSpinner />;

  //   delete one item
  const handleDelete = (itemId) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
           await axiosSecure.delete(`/deleteOneCart/${itemId}`);
          

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
        refetch();
      });
    } catch (error) {
      console.error("There was an error deleting the item!", error);
    }
  };

  // delete all cart item
  const handleDeleteAll = () => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axiosSecure.delete(
            `/deleteAllCart/${user.email}`
          );

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
        refetch();
      });
    } catch (error) {
      console.error("There was an error deleting the item!", error);
    }
  };



  return (
   <>
   <Helmet>
                <title>Cart</title>
            </Helmet>
   {
    cart.length === 0 ? <div className="h-screen flex justify-center items-center text-5xl text-[#7a7a7a]"> 
      <p>
      No item in the cart
      </p> </div>
    :
    <div>
    <div className="my-8 flex justify-between">
      <button className=" font-semibold bg-orange-400 text-white btn-sm  rounded-xl">
        Total ${totalPrice.toFixed(2)}{" "}
      </button>
     <div className="space-x-4">
     <Link to='/payment' className="btn btn-sm btn-accent text-white ">Check Out </Link>
      <button
        onClick={handleDeleteAll}
        className="btn btn-sm btn-warning text-white  "
      >
        Delete All
      </button>
     </div>
      
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {cart.map((i) => (
        <div key={i._id} className="card border bg-base-100 shadow-xl">
          <button className="bg-red-500 text-white w-8 rounded-full absolute right-0">
            {i.count}
          </button>
          
            <div>
            <img
              src={i.image}
              alt="medicine"
              className="h-64 rounded-tl-2xl rounded-tr-2xl w-full"
            />
            </div>
          
          <div className="p-4 space-y-2">
            <h2 className="card-title">{i.name} </h2>
            <h2 > <span className="font-semibold">Company:</span> {i.company_name} </h2>
            <h2 ><span className="font-semibold">Price:</span> {i.per_unit_price}$ </h2>
            <p>{i.description} </p>
            <hr />
            <div className="card-actions justify-between">
              <div className="space-x-2">
                <button
                  onClick={() => handleIncrease(i._id)}
                  className="btn btn-circle text-2xl text-white bg-green-400"
                >
                  +
                </button>
                <button
                  onClick={() => handleDecrease(i._id)}
                  className="btn text-white btn-circle text-2xl bg-red-400"
                >
                  -
                </button>
              </div>
              <button
                onClick={() => handleDelete(i._id)}
                className="btn text-white bg-yellow-300 "
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
   }
   </>
  );
};

export default Cart;
