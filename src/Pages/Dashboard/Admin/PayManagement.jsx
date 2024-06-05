import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/LoadingSpiner";
import Swal from "sweetalert2";


const PayManagement = () => {
    const axiosSecure = useAxiosSecure()
    const { data:payments = [], isLoading, refetch } = useQuery({
        queryKey: ["Payments"],
        queryFn: async () => {
          const { data } = await axiosSecure('/allPayments');
          return data  // Return both data and calculated total
        },
      });

      // accepte payment
      const handleAccept = async (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/updatePayStatus/${id}`, { status: 'paid' })
                    .then(res => {
                        refetch();
                        console.log(res.data);
                        Swal.fire({
                            title: "Updated!",
                            text: "The user role has been updated.",
                            icon: "success"
                        });
                    });
            }
        });
      }
      
      if(isLoading)return <LoadingSpinner/>
      
    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Buyer</th>
        <th>Status</th>
        <th>Accept payment</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        payments.map((i,idx)=>
        <tr key={i._id}>
        <th>{idx+1} </th>
        <td> {i.email} </td>
        <td>{i.status} </td>
        <td disabled={i.status === 'paid'}  onClick={()=>handleAccept(i._id)}  className="btn btn-success btn-xs">Accept</td>
      </tr>)
      }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PayManagement;