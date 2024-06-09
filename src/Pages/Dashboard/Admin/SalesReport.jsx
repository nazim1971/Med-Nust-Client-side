import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import PDFReport from '../../../components/PDFReport';
import { PDFDownloadLink } from '@react-pdf/renderer';
import DateRanger from '../../../components/DashBoard/DateRanger';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const SalesReport = () => {
  const axiosSecure = useAxiosSecure();
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  // Fetch seller item payment data
  const { data: payments = [], isLoading, isError } = useQuery({
    queryKey: ['allPaymentsData'],
    queryFn: async () => {
      const { data } = await axiosSecure(`/allPayments`,{
        params: {
          startDate: dateRange.startDate,
          endDate: dateRange.endDate,
        },
      });
      return data;
    },
  });

  // Function to consolidate data for each seller
  const consolidateData = (payments) => {
    const sellers = {};
    payments.forEach((payment) => {
      const sellerEmail = payment.cartInfo[0].sellerEmail;
      const buyerEmail = payment.email;
      const totalPrice = payment.price;
      const medicineNames = payment.cartInfo.map((item) => item.name).join(', ');
      if (!sellers[sellerEmail]) {
        sellers[sellerEmail] = [];
      }
      sellers[sellerEmail].push({ buyerEmail, totalPrice, medicineNames });
    });
    return sellers;
  };

  const sellersData = consolidateData(payments);

 

  return (
    <div>
      <Helmet>
                <title>Sales Report </title>
            </Helmet>
      <div>
      <PDFDownloadLink
              document={<PDFReport sellersData={sellersData} />}
              fileName="sales_report.pdf"
            >
              {({ loading }) => (loading ? 'Preparing document...' : <button className='btn btn-warning'> Download Report </button>)}
            </PDFDownloadLink>
            <DateRanger setDateRange={setDateRange} />
      </div>
      <div className="overflow-x-auto">
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error fetching data</p>
        ) : (
          <>
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Seller Email</th>
                  <th>Buyer Email</th>
                  <th>Medicine</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(sellersData).map(([sellerEmail, sellerInfo], index) =>
                  sellerInfo.map((info, idx) => (
                    <tr key={`${index}-${idx}`}>
                      {idx === 0 && (
                        <>
                          <td rowSpan={sellerInfo.length}>{index + 1}</td>
                          <td rowSpan={sellerInfo.length}>{sellerEmail}</td>
                        </>
                      )}
                      <td>{info.buyerEmail}</td>
                      <td>{info.medicineNames}</td>
                      <td>${info.totalPrice}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
           
          </>
        )}
      </div>
    </div>
  );
};

export default SalesReport;
