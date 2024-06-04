
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/LoadingSpiner";

const AdminHome = () => {

    const axiosSecure = useAxiosSecure()
    const {data: cart = [],isLoading } = useQuery({
        queryKey: ["pending Total"],
        queryFn: async()=>{
            const {data} = await axiosSecure('/cart');
            return data
        }
    })
    
    const {data: payment = [] } = useQuery({
        queryKey: ["paid total"],
        queryFn: async()=>{
            const {data} = await axiosSecure('/payments');
            return data
        }
    })
    const {data: users = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async()=>{
            const {data} = await axiosSecure('/users');
            return data
        }
    })
    //total pending amount
    const totalPending = cart.reduce((sum,item)=>sum + item.per_unit_price * item.count, 0)
    //total paid amount
    const totalPaid = payment.reduce((sum,item)=> sum + item.price,0)

    if(isLoading)return <LoadingSpinner/>
    return (
        <div>
           <div className="stats shadow">
  
  <div className="stat place-items-center">
    <div className="stat-title">Pending total</div>
    <div className="stat-value">${totalPending} </div>
    <div className="stat-desc">From January 1st to February 1st</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Total Paid</div>
    <div className="stat-value text-secondary">${totalPaid} </div>
    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">{users.length} </div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
        </div>
    );
};

export default AdminHome;