import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import LoadingSpinner from "../../components/LoadingSpiner";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Cart = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const {
    data: cart = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/userCart/${user.email}`);
      return data;
    },
  });

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.per_unit_price * item.count, 0);

  // Handle increase item count
  const handleIncrease = async (itemId) => {
    try {
      await axiosPublic.put(`/cart/increment/${itemId}`);
      refetch(); // Refresh the cart data
    } catch (error) {
      console.error('Error increasing count:', error);
    }
  };

  // Handle decrease item count
  const handleDecrease = async (itemId) => {
    try {
       await axiosPublic.put(`/cart/decrement/${itemId}`);
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
          const response = await axiosPublic.delete(`/deleteOneCart/${itemId}`);
          console.log("Item deleted successfully:", response.data);

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
          const response = await axiosPublic.delete(
            `/deleteAllCart/${user.email}`
          );
          console.log("Item deleted successfully:", response.data);

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
    <div>
      <div className="my-5 flex justify-between">
        <span className="text-2xl font-semibold bg-red-300 p-2 rounded-xl">
          Total ${totalPrice.toFixed(2)}{" "}
        </span>
        <Link to='/checkOut' className="btn btn-success ">Check Out</Link>
        <button
          onClick={handleDeleteAll}
          className="btn btn-warning text-white  "
        >
          Delete All
        </button>
      </div>
      <div className="grid grid-cols-3 gap-8 ">
        {cart.map((i) => (
          <div key={i._id} className="card  bg-base-100 shadow-xl">
            <button className="bg-red-500 w-8 rounded-full absolute right-0">
              #{i.count}
            </button>
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{i.name} </h2>
              <h2 className="card-title">{i.company_name} </h2>
              <h2 className="card-title">Price:{i.per_unit_price}$ </h2>
              <p>{i.description} </p>
              <div className="card-actions justify-between">
                <div className="space-x-2">
                  <button
                    onClick={() => handleIncrease(i._id)}
                    className="btn btn-circle text-2xl bg-green-400"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleDecrease(i._id)}
                    className="btn btn-circle text-2xl bg-red-400"
                  >
                    -
                  </button>
                </div>
                <button
                  onClick={() => handleDelete(i._id)}
                  className="btn bg-yellow-300 "
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
