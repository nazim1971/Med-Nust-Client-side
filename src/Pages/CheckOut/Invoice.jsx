import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const Invoice = () => {
    const {user}  = useAuth()
    const axiosSecure = useAxiosSecure()
    const {
        data: payment = [],
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ["cart"],
        queryFn: async () => {
          const { data } = await axiosSecure(`/payments/${user.email}`);
          return data;
        },
      });

    return (
        <div>
          payment: {payment.length}
        </div>
    );
};

export default Invoice;