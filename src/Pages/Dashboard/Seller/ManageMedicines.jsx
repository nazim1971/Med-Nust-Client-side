import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import AddMedicineModel from "../../../Modal/AddMedicineModel";
import LoadingSpinner from "../../../components/LoadingSpiner";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet";
// import { MdUpdate } from "react-icons/md";
// import UpdateMedicineModal from "../../../Modal/UpdateMedicineModal";
// import { useEffect, useState } from "react";


const ManageMedicines = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    // const [id, setId]  = useState('')
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
    // const handleShowUpdate = (id) => {
        
    //     setId(id)
    //     refetch()
    //     document.getElementById('my_modal_2').showModal();
    //   };


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
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {manageMedicine.map((i, idx) => (
              <tr key={i._id}>
                <th> {idx+1} </th>
                <td> {i.name} </td>
                <td>{i.company_name}  </td>
                <td> {i.description} </td>
                {/* <td> <MdUpdate onClick={() => handleShowUpdate(i._id)} className="text-2xl"/> </td> */}
                 
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
      <AddMedicineModel refetch={refetch} categoryName={categoryName}/>
      {/* <UpdateMedicineModal refetch={refetch} categoryName={categoryName} id={id} /> */}
        </div>
    );
};

export default ManageMedicines;