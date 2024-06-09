import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const UserHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
  
    // Fetch seller item payment data
    const { data: payments = [] } = useQuery({
      queryKey: ["paymentsOfUser"],
      queryFn: async () => {
        const { data } = await axiosSecure(`/payments/${user.email}`);
        return data;
      },
    });
    return (
        <div>
          <Helmet>
                <title>Payment History</title>
            </Helmet>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Transaction Id</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        payments.map((i,idx)=><tr key={i._id}>
        <th>{idx+1} </th>
        <td>{i.transactionId} </td>
        <td className={`btn btn-sm text-white  ${i.status === 'paid'? ' bg-green-600' : 'bg-red-400 '}` } > {i.status} </td>
      </tr>)
      }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default UserHome;