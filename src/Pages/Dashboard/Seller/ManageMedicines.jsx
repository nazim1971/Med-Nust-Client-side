import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import AddMedicineModel from "../../../Modal/AddMedicineModel";
import LoadingSpinner from "../../../components/LoadingSpiner";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet";
import { FiDelete } from "react-icons/fi";
import Swal from "sweetalert2";

const ManageMedicines = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const {data: manageMedicine =[], isLoading,refetch} = useQuery({
        queryKey: ['manageMedicine'],
        queryFn: async ()=>{
            const {data} = await axiosSecure(`/sellerMed/${user.email}`);
            return data;
        }
    })
 
   
    const {data: categoryName=[]} = useQuery({
        queryKey: ['categoryName'],
        queryFn: async ()=>{
            const res = await axiosPublic('/categoryName');
            return res.data
        }
    })

    
    const handleShowModal = () => {
        document.getElementById('my_modal_1').showModal();
      };


    const handleDelete = async  e =>{
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
             await axiosSecure.delete(`/sellerMedicine/${e}`);
            
  
            Swal.fire({
              title: "Deleted!",
              text: "Your Medicine has been deleted.",
              icon: "success",
            });
          }
          refetch();
        });
      } catch (error) {
        console.error("There was an error deleting the item!", error);
      }
    }

      if(isLoading)return <LoadingSpinner/>
    return (
        <div>
          <Helmet>
                <title>Manage Medicines</title>
            </Helmet>
            <div className="text-right">
                <button onClick={() => handleShowModal()} className="btn btn-warning" >Add Medicine</button>
            </div>
          <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Company Name</th>
              <th>Description</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {manageMedicine.map((i, idx) => (
              <tr key={i._id}>
                <th> {idx+1} </th>
                <td> {i.name} </td>
                <td>{i.company_name}  </td>
                <td> {i.description.slice(0,30)}... </td>
                 <td> <FiDelete onClick={()=> handleDelete(i._id)}  className="text-xl" /> </td>
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
      <AddMedicineModel refetch={refetch} categoryName={categoryName}/>
        </div>
    );
};

export default ManageMedicines;