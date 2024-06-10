import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    alignSelf: 'center',
    fontSize: 10,
  },
  table: {
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    fontSize: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    fontSize: 10,
  },
  tableCell: {
    flex: 1,
    padding: 8,
    fontSize: 10,
  },
  tableHeader: {
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
    fontSize: 10,
  },
  totalRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#000',
    fontSize: 10,
  },
  totalLabel: {
    flex: 3,
    padding: 8,
    fontWeight: 'bold',
    fontSize: 10,
  },
  totalAmount: {
    flex: 1,
    padding: 8,
    fontWeight: 'bold',
    fontSize: 10,
  },
  tran:{
    fontSize: 10,
    fontWeight: 'bold',
  }
});

const InvoicePdf = ({ payment }) => {
  const { date, cartInfo, price, transactionId } = payment;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image style={styles.logo} src='https://i.ibb.co/Z88qpcZ/MED-NUST-removebg-preview.png' />
          <Text style={styles.title}>Invoice</Text>
          <Text >Date: {new Date(date).toLocaleDateString()}</Text>
          <Text>Transaction ID: {transactionId}</Text>
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={styles.tableCell}>Product Name</Text>
              <Text style={styles.tableCell}>Quantity</Text>
              <Text style={styles.tableCell}>Price per Unit</Text>
              <Text style={styles.tableCell}>Total</Text>
            </View>
            {cartInfo.map((item, index) => (
              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableCell}>{item.name}</Text>
                <Text style={styles.tableCell}>{item.count}</Text>
                <Text style={styles.tableCell}>${item.price_per_unit}</Text>
                <Text style={styles.tableCell}>${item.count * item.price_per_unit}</Text>
              </View>
            ))}
            <View style={[styles.tableRow, styles.totalRow]}>
              <Text style={[styles.tableCell, styles.totalLabel]}>Total:</Text>
              <Text style={[styles.tableCell, styles.totalAmount]}>${price}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default InvoicePdf;
