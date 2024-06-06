import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/LoadingSpiner";

const PayHistorySeller = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Fetch seller item payment data
  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["paymentsData"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/payments/${user.email}`);
      return data;
    },
  });

  // Filter payments with items sold by the seller
  const sellerPayments = payments.filter(payment =>
    payment.cartInfo.some(cartItem => cartItem.sellerEmail === user.email)
  );

  // Process pending payments
  const pendingSalesData = sellerPayments
    .filter(payment => payment.status === "pending")
    .reduce((acc, payment) => {
      payment.cartInfo.forEach(cartItem => {
        if (cartItem.sellerEmail === user.email) {
          const { name, count, price_per_unit } = cartItem;
          if (!acc[name]) {
            acc[name] = { totalSellCount: 0, totalSellAmount: 0 };
          }
          acc[name].totalSellCount += count;
          acc[name].totalSellAmount += count * price_per_unit;
        }
      });
      return acc;
    }, {});

  // Process paid payments
  const paidSalesData = sellerPayments
    .filter(payment => payment.status === "paid")
    .reduce((acc, payment) => {
      payment.cartInfo.forEach(cartItem => {
        if (cartItem.sellerEmail === user.email) {
          const { name, count, price_per_unit } = cartItem;
          if (!acc[name]) {
            acc[name] = { totalSellCount: 0, totalSellAmount: 0 };
          }
          acc[name].totalSellCount += count;
          acc[name].totalSellAmount += count * price_per_unit;
        }
      });
      return acc;
    }, {});

  // Calculate total pending sales amount
  const totalPendingSales = Object.values(pendingSalesData).reduce(
    (total, medicine) => total + medicine.totalSellAmount,
    0
  );

  // Calculate total paid sales amount
  const totalPaidSales = Object.values(paidSalesData).reduce(
    (total, medicine) => total + medicine.totalSellAmount,
    0
  );
  if(isLoading)return <LoadingSpinner/>
  return (
    <div>
        <div className="stats shadow">
  
  <div className="stat place-items-center">
    <div className="stat-title">pending</div>
    <div className="stat-value">${totalPendingSales.toFixed(2)}</div>
    <div className="stat-desc">From January 1st to February 1st</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">paid</div>
    <div className="stat-value text-secondary">${totalPaidSales.toFixed(2)}</div>
    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
  </div>

  
</div>
      <div className="overflow-x-auto">
        <h2>Pending Sales</h2>
        <table className="table table-zebra">
          {/* Table head */}
          <thead>
            <tr>
              <th>Medicine Name</th>
              <th>Total Sell Count</th>
              <th>Total Sell Amount</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(pendingSalesData).map(name => (
              <tr key={name}>
                <td>{name}</td>
                <td>{pendingSalesData[name].totalSellCount}</td>
                <td>${pendingSalesData[name].totalSellAmount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto">
        <h2>Paid Sales</h2>
        <table className="table table-zebra">
          {/* Table head */}
          <thead>
            <tr>
              <th>Medicine Name</th>
              <th>Total Sell Count</th>
              <th>Total Sell Amount</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(paidSalesData).map(name => (
              <tr key={name}>
                <td>{name}</td>
                <td>{paidSalesData[name].totalSellCount}</td>
                <td>${paidSalesData[name].totalSellAmount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PayHistorySeller;
