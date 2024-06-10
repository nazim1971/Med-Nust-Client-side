

import { PDFDownloadLink } from '@react-pdf/renderer';
import InvoicePdf from '../../Pages/CheckOut/InvoicePdf';
import { useLocation } from 'react-router-dom';

const Invoice = () => {
  const location = useLocation();
  const { payment } = location.state || {};
 

    return (
        <div>
           <PDFDownloadLink
              document={<InvoicePdf payment={payment} />}
              fileName="sales_report.pdf"
            >
              {({ loading }) => (loading ? 'Preparing document...' : <button className='btn btn-warning'> Download Report </button>)}
            </PDFDownloadLink>

        </div>
    );
};

export default Invoice;