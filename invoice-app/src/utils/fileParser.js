import * as XLSX from 'xlsx';

export const parseFile = async (file) => {
  const fileType = file.type;

  if (fileType === 'application/pdf') {
    // PDF Parsing Logic (Stub - Replace with actual API)
    return { invoices: [], products: [], customers: [] };
  } else if (fileType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
    return parseExcel(file);
  } else {
    throw new Error('Unsupported file type.');
  }
};

const parseExcel = async (file) => {
  const data = await file.arrayBuffer();
  const workbook = XLSX.read(data, { type: 'array' });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const json = XLSX.utils.sheet_to_json(sheet);

  // Convert JSON to required format (example)
  const invoices = json.map((row, index) => ({
    id: index + 1,
    serialNumber: row['Serial Number'],
    customerName: row['Customer Name'],
    productName: row['Product Name'],
    quantity: row['Quantity'],
    tax: row['Tax'],
    totalAmount: row['Total Amount'],
    date: row['Date'],
  }));

  return { invoices, products: [], customers: [] }; // Adjust parsing logic as necessary
};