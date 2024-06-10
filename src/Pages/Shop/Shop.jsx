import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { BsEyeFill } from "react-icons/bs";
import LoadingSpinner from "../../components/LoadingSpiner";
import { useEffect, useState } from "react";
import ShopModal from "./ShopModal";
import { BiCartAdd } from "react-icons/bi";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Shop = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [id, setId] = useState(null);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const navigate = useNavigate();

  // const { data: medicines = [], isLoading } = useQuery({
  //   queryKey: ["medicines"],
  //   queryFn: async () => {
  //     const { data } = await axiosPublic(`/medicines`);
  //     return data;
  //   },
  // });
  const {
    data: medicines = [],
    isLoading,
    refetch: medicineRefetch,
  } = useQuery({
    queryKey: ["medicines", page],
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/medicines?page=${page}&search=${searchQuery}&sortOrder=${sortOrder}`
      );
      return data;
    },
    keepPreviousData: true,
  });

  useEffect(() => {
    medicineRefetch();
    // Reset page when component mounts or when filters change
  }, [medicineRefetch()]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const getSerialIndex = (index) => {
    return (page - 1) * 8 + index + 1; // Assuming 8 items per page
  };

  //   single medicine
  const { data: medicine = [], refetch: refetchMedicine } = useQuery({
    queryKey: ["medicine single", id],
    queryFn: async () => {
      const { data } = await axiosPublic(`/medicine/${id}`);
      return data;
    },
    enabled: !!id,
  });

  // Function to show modal and set the ID
  const handleShowModal = (medicineId) => {
    setId(medicineId);
    document.getElementById("my_modal_1").showModal();
  };

  useEffect(() => {
    if (id) {
      refetchMedicine();
    }
  }, [id, refetchMedicine]);

  //   cart post
  const postMedicineData = async (medicineData) => {
    try {
      // Await the axios POST request
      const response = await axiosPublic.post("/cart", medicineData);
      // Return the response data if the request is successful
      return response.data;
    } catch (error) {
      // Log the error and rethrow it for further handling if necessary
      console.error(
        "Error posting data:",
        error.response ? error.response.data : error.message
      );
      toast.error(error.message);
      throw error;
    }
  };

  // Fetch cart data
  const {
    data: cart = [],
    isLoading: isLoadingCart,
    refetch: refetchCart,
  } = useQuery({
    queryKey: ["cart2"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/userCart/${user.email}`);
      return data;
    },
  });

  //   add item to cart
  const handleAddToCart = async (e) => {
    if (!user) return navigate("/login");
    // Check if the item is already in the cart
    const isAlreadyInCart = cart.some((cartItem) => cartItem.name === e.name);

    if (isAlreadyInCart) {
      toast.error("This item is already in your cart.");
      return;
    }
    const discountedPrice = e.discount > 0 ? e.per_unit_price * (1 - e.discount / 100) : e.per_unit_price;

    const medicineData = {
      user_name: user?.displayName,
      user_email: user?.email,
      user_image: user?.photoURL,
      name: e.name,
      category: e.category,
      generic_name: e.generic_name,
      company_name: e.company_name,
      mass_unit: e.mass_unit,
      per_unit_price: e.discount > 0 ? discountedPrice : e.per_unit_price ,
      description: e.description,
      image: e.image,
      count: 1,
      sellerEmail: e.sellerEmail,
    };
    try {
      // Await the call to postMedicineData and log the result
      await postMedicineData(medicineData);
      toast.success("Medicine Added Successfully!");
      refetchCart();
    } catch (error) {
      // Handle the error if the request fails
      toast.error(error.message);
    }
  };

  if (isLoading || isLoadingCart) return <LoadingSpinner />;
  return (
    <div>
      <Helmet>
                <title>Shop</title>
            </Helmet>
      <div className="flex justify-between mt-10 mb-4">
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input input-bordered w-full max-w-xs mb-4"
          />
        </div>
        <div className="sort-controls">
          <label htmlFor="sortOrder" className="mr-2"></label>
          <select
            id="sortOrder"
            defaultValue={""}
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className=" border p-1 rounded-xl "
          >
            <option value="asc">Low To High</option>
            <option value="desc">High To Low</option>
            <option value="">Default</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>View Details</th>
              <th>Add To cart</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((i, idx) => (
              <tr key={i._id}>
                <th> {getSerialIndex(idx)} </th>
                <td> {i.name} </td>
                <td>
                  {" "}
                  <BsEyeFill
                    className="text-2xl"
                    onClick={() => handleShowModal(i._id)}
                  />{" "}
                </td>
                <td>
                  {" "}
                  <BiCartAdd
                    onClick={() => handleAddToCart(i)}
                    className="text-2xl"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="space-x-5 text-right mt-5">
          <button
            className="btn btn-primary btn-sm"
            onClick={handlePrevPage}
            disabled={page === 1}
          >
            Previous Page {page - 1}{" "}
          </button>

          <button
            className="btn btn-secondary btn-sm"
            onClick={handleNextPage}
            disabled={medicines.length < 8}
          >
            Next {page}
          </button>
        </div>
      </div>

      <ShopModal medicine={medicine} />
    </div>
  );
};

export default Shop;
