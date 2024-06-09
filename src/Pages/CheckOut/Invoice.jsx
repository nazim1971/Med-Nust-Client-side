import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect } from "react";

const Invoice = () => {
    const {user}  = useAuth()
    const axiosSecure = useAxiosSecure()
    const {
        data: payment = [],
        refetch,
      } = useQuery({
        queryKey: ["payments"],
        queryFn: async () => {
          const { data } = await axiosSecure(`/payments/${user.email}`);
          return data;
        },
      });

      useEffect(() => {
        refetch(); // Fetch payment data once when the component mounts
    }, []);


    return (
        <div>
         <p>
         Email: {payment.email}
         </p>
         <p>
          TransactionId: {payment.
transactionId}
         </p>

         
        </div>
    );
};

export default Invoice;