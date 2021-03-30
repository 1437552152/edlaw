import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = ({ section1, section2, section3 }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{section1}</Text>
      </View>
      <View style={styles.section}>
        <Text>{section2}</Text>
      </View>
      <View style={styles.section}>
        <Text>{section3}</Text>
      </View>
    </Page>
  </Document>
);

const Pdf = ({
  myDoc = (
    <MyDocument
      section1="Section #1"
      section2="Section #2"
      section3="Section #3"
    />
  ),
}) => (
  <PDFViewer
    style={{
      position: "absolute",
      right: 0,
      top: 0,
      bottom: 0,
      width: "100%",
      height: "100%",
    }}
  >
    {myDoc}
  </PDFViewer>
);

export default Pdf;