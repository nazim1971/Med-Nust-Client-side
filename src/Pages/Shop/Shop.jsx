import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { BsEyeFill } from "react-icons/bs";
import LoadingSpinner from "../../components/LoadingSpiner";
import { useEffect,  useState } from "react";
import ShopModal from "./ShopModal";
import { BiCartAdd } from "react-icons/bi";
import useAuth from "../../Hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";

const Shop = () => {
  const {user} = useAuth()  
  const axiosPublic = useAxiosPublic();
   const [id,setId] = useState(null);

  const { data: medicines = [], isLoading } = useQuery({
    queryKey: ["medicines"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/medicines`);
      return data;
    },
  });

//   single medicine
const { data: medicine = [] , refetch: refetchMedicine} = useQuery({
    queryKey: ["medicine",id],
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
        if (id) {
          refetchMedicine();
        }
      }, [id, refetchMedicine]);

    //   cart post 
    const postMedicineData = async (medicineData) => {
        try {
          // Await the axios POST request
          const response = await axiosPublic.post('/cart', medicineData)
          console.log('Data successfully posted--== 2:', response.data);
          // Return the response data if the request is successful
          return response.data;
        } catch (error) {
          // Log the error and rethrow it for further handling if necessary
          console.error('Error posting data:', error.response ? error.response.data : error.message);
          toast.error(error.message)
          throw error;
        }
      };

    //   add item to cart
    const handleAddToCart =async e =>{

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
            count: 1,
        };
        try {
            // Await the call to postMedicineData and log the result
            const data = await postMedicineData(medicineData);
            console.log('Data successfully posted:', data);
            toast.success('Medicine Added Successfully!');
          } catch (error) {
            // Handle the error if the request fails
            toast.error(error.message)
          }
    }

 if(isLoading) return <LoadingSpinner/>

  return (
    <div>
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
                <th> {idx+1} </th>
                <td> {i.name} </td>
                <td> <BsEyeFill className="text-2xl" onClick={() => handleShowModal(i._id)} />  </td>
                <td> <BiCartAdd onClick={()=>handleAddToCart(i)}  className="text-2xl"  />
                 </td>
                 
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
        <ShopModal medicine={medicine} />
        <Toaster/>
    </div>
  );
};

export default Shop;
