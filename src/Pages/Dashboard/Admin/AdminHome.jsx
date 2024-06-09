
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/LoadingSpiner";
import { Helmet } from "react-helmet";

const AdminHome = () => {

    const axiosSecure = useAxiosSecure()
    const { data: paidPayments = [], isLoading } = useQuery({
        queryKey: ["paidPayments"],
        queryFn: async () => {
          const { data } = await axiosSecure(`/payments?status=paid`);
          const total = data.reduce((sum, item) => sum + item.price, 0);
          return { data, totalPaid: total }; // Return both data and calculated total
        },
      });
      
      const { data: pendingPayments = [] } = useQuery({
        queryKey: ["pendingPayments"],
        queryFn: async () => {
          const { data } = await axiosSecure(`/payments?status=pending`);
          const total = data.reduce((sum, item) => sum + item.price, 0);
          return { data, totalPending: total }; // Return both data and calculated total
        },
      });
    const {data: users = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async()=>{
            const {data} = await axiosSecure('/users');
            return data
        }
    })

    

    if(isLoading)return <LoadingSpinner/>
    return (
        <div>
          <Helmet>
                <title>Admin Home</title>
            </Helmet>
           <div className="stats shadow w-full border">
  
  <div className="stat place-items-center border-r">
    <div className="stat-title">Pending total</div>
    <div className="stat-value">${pendingPayments.totalPending} </div>
  </div>
  
  <div className="stat place-items-center border-r">
    <div className="stat-title">Total Paid</div>
    <div className="stat-value text-secondary">${paidPayments.totalPaid} </div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">{users.length} </div>
  </div>
  
</div>
        </div>
    );
};

export default AdminHome;