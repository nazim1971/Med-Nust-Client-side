import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import LoadingSpinner from "../../../components/LoadingSpiner";
import { BsEyeFill } from "react-icons/bs";
import { BiCartAdd } from "react-icons/bi";
import ShopModal from "../../Shop/ShopModal";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const CategoryDate = () => {
    const { user } = useAuth();
    const { cat } = useParams();
    const [id, setId] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState("");
    const [page, setPage] = useState(1);
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const { data: categoryData = [], isLoading, refetch: refetchCategoryData } = useQuery({
        queryKey: ['categoryData', page, sortOrder],
        queryFn: async () => {
            const { data } = await axiosPublic(`/category?category=${cat}&page=${page}&search=${searchQuery}&sortOrder=${sortOrder}`);
            return data;
        },
        keepPreviousData: true,
    });

    //   single medicine
    const { data: medicine = [] } = useQuery({
        queryKey: ["medicine", id],
        queryFn: async () => {
            const { data } = await axiosPublic(`/medicine/${id}`);
            return data;
        },
        enabled: !!id,
    });

    // Function to show modal and set the ID
    const handleShowModal = (medicineId) => {
        setId(medicineId);
        document.getElementById('my_modal_1').showModal();
    };

    useEffect(() => {
        refetchCategoryData();
    }, [page, sortOrder, searchQuery, refetchCategoryData]);

 
  
    const handleNextPage = () => {
      setPage((prevPage) => prevPage + 1);
    };
  
    const handlePrevPage = () => {
      setPage((prevPage) => Math.max(prevPage - 1, 1));
    };
  
    const getSerialIndex = (index) => {
      return (page - 1) * 8 + index + 1; // Assuming 8 items per page
    };

    //   cart post 
    const postMedicineData = async (medicineData) => {
        try {
            // Await the axios POST request
            const response = await axiosPublic.post('/cart', medicineData);
            console.log('Data successfully posted--== 2:', response.data);
            // Return the response data if the request is successful
            return response.data;
        } catch (error) {
            // Log the error and rethrow it for further handling if necessary
            console.error('Error posting data:', error.response ? error.response.data : error.message);
            toast.error(error.message);
            throw error;
        }
    };

    // Fetch cart data
    const { data: cart = [], isLoading: isLoadingCart, refetch: refetchCart } = useQuery({
        queryKey: ["cart2"],
        queryFn: async () => {
            const { data } = await axiosSecure(`/userCart/${user.email}`);
            return data;
        },
    });

    //   add item to cart
    const handleAddToCart = async e => {
        // Check if the item is already in the cart
        const isAlreadyInCart = cart.some(cartItem => cartItem.name === e.name);

        if (isAlreadyInCart) {
            toast.error('This item is already in your cart.');
            return;
        }

        const medicineData = {
            user_name: user?.displayName,
            user_email: user?.email,
            user_image: user?.photoURL,
            name: e.name,
            category: e.category,
            generic_name: e.generic_name,
            company_name: e.company_name,
            mass_unit: e.mass_unit,
            per_unit_price: e.per_unit_price,
            description: e.description,
            image: e.image,
            count: 1
        };
        try {
            // Await the call to postMedicineData and log the result
            const data = await postMedicineData(medicineData);
            console.log('Data successfully posted:', data);
            toast.success('Medicine Added Successfully!');
            refetchCart();
        } catch (error) {
            // Handle the error if the request fails
            toast.error(error.message);
        }
    };

    if (isLoading || isLoadingCart) return <LoadingSpinner />;

    return (
        <div>
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
                <label htmlFor="sortOrder" className="mr-2">Sort by Price:</label>
                <select id="sortOrder" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="select select-bordered">
                    <option value="asc">Low To High</option>
                    <option value="desc">High To Low</option>
                    <option value="">Default</option>
                </select>
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
                        {categoryData.map((i, idx) => (
                            <tr key={i._id}>
                                <th> {getSerialIndex(idx)} </th>
                                <td> {i.name} </td>
                                <td> <BsEyeFill className="text-2xl" onClick={() => handleShowModal(i._id)} /> </td>
                                <td> <BiCartAdd onClick={() => handleAddToCart(i)} className="text-2xl" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="btn btn-primary" onClick={handlePrevPage} disabled={page === 1}>Previous Page</button>
        
        <button className="btn btn-secondary" onClick={handleNextPage} disabled={categoryData.length < 8} >Next {page} </button>
            </div>
            <ShopModal medicine={medicine} />
         
        </div>
    );
};

export default CategoryDate;
