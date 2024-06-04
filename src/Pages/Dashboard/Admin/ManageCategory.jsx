import { FiDelete } from "react-icons/fi";
import { GrUpdate } from "react-icons/gr";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import CategoryModal from "../../../Modal/CategoryModal";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import UpdateCategoryModal from "../../../Modal/UpdateCategoryModal";
import { Toaster } from "react-hot-toast";
import { useState } from "react";


const ManageCategory = () => {
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic();
    const [id,setId] = useState({})
    const {data: categoryName=[], refetch} = useQuery({
        queryKey: ['Allcategory'],
        queryFn: async ()=>{
            const res = await axiosPublic('/categoryName');
            return res.data
        }
    })
    // delete categroy
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
              const response = await axiosSecure.delete(`/category/${itemId._id}`);
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
    //update category

    const handleShowModal = () => {
        console.log('Opening modal');
        document.getElementById('my_modal_1').showModal();
      };
    const handleShowModalUp = (id) => {
        setId(id)
        console.log('Opening modal');
        document.getElementById('my_modal_2').showModal();
      };
    return (
        <div>
            <div className="text-right">
                <button onClick={() => handleShowModal()} className="btn btn-warning">Add Category</button>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Name</th>
        <th>Update</th>
        <th >Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        categoryName.map((i,idx)=>
            <tr key={i._id}>
            <th>
              {idx+1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={i.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{i.category} </div>
                  
                </div>
              </div>
            </td>
            <td>
             <GrUpdate onClick={() => handleShowModalUp(i)} />
              
            </td>
            <td>
                <FiDelete onClick={()=>handleDelete(i)}/>
            </td>
           
          </tr>
        )
     }

    </tbody>
  
    
  </table>
  <CategoryModal refetch={refetch}  />
  <UpdateCategoryModal refetch={refetch} id={id} />
</div>
<Toaster/>
        </div>
    );
};

export default ManageCategory;