import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const PDFReport = ({ sellersData }) => {

  const date = new Date().toLocaleDateString();

    const styles = StyleSheet.create({
        page: {
          flexDirection: 'column',
          padding: 10,
        },
        section: {
          marginBottom: 10,
        },
        table: {
          display: 'table',
          width: 'auto',
        },
        tableRow: {
          flexDirection: 'row',
        },
        tableColHeader: {
          width: '25%',
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: '#000',
          backgroundColor: '#f0f0f0',
          padding: 5,
          fontSize: 8,
        },
        tableCol: {
          width: '25%',
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: '#000',
          padding: 5,
          fontSize: 8,
        },
        tableCell: {
          margin: 'auto',
          marginTop: 5,
          fontSize: 8,
        },
        tableCol2: {
          width: '25%',
          borderStyle: 'solid',
          padding: 5,
          fontSize: 8,
        }
      });


    
return <>
        <Document>
        <Page style={styles.page}>
          <Text >Sales Report : {date} </Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>#</Text>
              <Text style={styles.tableColHeader}>Seller Email</Text>
              <Text style={styles.tableColHeader}>Buyer Email</Text>
              <Text style={styles.tableColHeader}>Medicine</Text>
              <Text style={styles.tableColHeader}>Total Price</Text>
            </View>
            {Object.entries(sellersData).map(([sellerEmail, sellerInfo], index) => (
              sellerInfo.map((info, idx) => (
                <View style={styles.tableRow} key={`${index}-${idx}`}>
                  {idx === 0 && (
                    <>
                      <Text style={styles.tableCol} rowSpan={sellerInfo.length}>{index + 1}</Text>
                      <Text style={styles.tableCol} rowSpan={sellerInfo.length}>{sellerEmail}</Text>
                    </>
                  )}
                  {idx !== 0 && (
                    <>
                      <Text style={styles.tableCol2}></Text>
                      <Text style={styles.tableCol2}></Text>
                    </>
                  )}
                  <Text style={styles.tableCol}>{info.buyerEmail}</Text>
                  <Text style={styles.tableCol}>{info.medicineNames}</Text>
                  <Text style={styles.tableCol}>${info.totalPrice}</Text>
                </View>
              ))
            ))}
          </View>
        </Page>
      </Document>
</>
      
};

export default PDFReport;