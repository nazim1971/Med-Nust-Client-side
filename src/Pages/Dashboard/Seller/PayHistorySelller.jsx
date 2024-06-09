import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const PayHistorySeller = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Fetch seller item payment data
  const { data: payments = [] } = useQuery({
    queryKey: ["paymentsData"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/payments/${user.email}`);
      return data;
    },
  });

  // Process payment data to calculate total sell count and amount for each medicine
  const salesData = payments.map(paymentItem => {
    const sellerItems = paymentItem.cartInfo.filter(cartItem => cartItem.sellerEmail === user.email);

    const paymentSummary = sellerItems.reduce((summary, cartItem) => {
      const { name, count, price_per_unit } = cartItem;
      if (!summary[name]) {
        summary[name] = { totalSellCount: 0, totalSellAmount: 0 };
      }
      summary[name].totalSellCount += count;
      summary[name].totalSellAmount += count * price_per_unit;
      return summary;
    }, {});

    return {
      email: paymentItem.email,
      status: paymentItem.status,
      medicines: Object.keys(paymentSummary).map(name => ({
        name,
        totalSellCount: paymentSummary[name].totalSellCount,
        totalSellAmount: paymentSummary[name].totalSellAmount
      }))
    };
  }).filter(payment => payment.medicines.length > 0); // Filter out payments with no items for this seller


  return (
    <div>
      <Helmet>
                <title>Payment History</title>
            </Helmet>
      
      <div className="overflow-x-auto">
        <table  className="table table-zebra">
          {/* Table head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Status</th>
              <th>Medicine Name</th>
              <th>Total Sell Count</th>
              <th>Total Sell Amount</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((payment, index) => (
              payment.medicines.map((medicine, medicineIndex) => (
                <tr key={`${index}-${medicineIndex}`}>
                  {medicineIndex === 0 && (
                    <>
                      <th rowSpan={payment.medicines.length}>{index + 1}</th>
                      <td rowSpan={payment.medicines.length}>{payment.email}</td>
                      <td   rowSpan={payment.medicines.length}> <span className={`p-1 rounded-xl ${payment.status === 'paid'? ' bg-green-600' : 'bg-red-400 '}` }>{payment.status}</span> </td>
                    </>
                  )}
                  <td>{medicine.name}</td>
                  <td>{medicine.totalSellCount}</td>
                  <td>${medicine.totalSellAmount.toFixed(2)}</td>
                </tr>
              ))
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PayHistorySeller;
