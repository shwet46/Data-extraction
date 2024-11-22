import axios from 'axios';

/**
 * API endpoint and authentication token for Google Gemini API.
 * Replace `<YOUR_API_KEY>` with your actual API key from Google Gemini.
 */
const GEMINI_API_BASE_URL = 'https://ai.google.dev/gemini-api';
const API_KEY = '<YOUR_API_KEY>';

/**
 * Process uploaded files and extract relevant data using Google Gemini API.
 * Supports PDFs, images, and Excel files.
 *
 * @param {File[]} files - Array of uploaded files
 * @returns {Promise<Object>} - Extracted data organized by invoices, products, and customers
 */
export const processFiles = async (files) => {
  const formData = new FormData();

  // Add files to the form data
  files.forEach((file) => formData.append('files', file));

  try {
    // Send files to the Google Gemini Document Processing API
    const response = await axios.post(`${GEMINI_API_BASE_URL}/document-processing`, formData, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    const data = response.data;

    // Process and structure extracted data
    return structureExtractedData(data);
  } catch (error) {
    console.error('Error processing files:', error.response?.data || error.message);
    throw new Error('File processing failed. Please try again.');
  }
};

/**
 * Helper function to structure the extracted data into invoices, products, and customers.
 *
 * @param {Object} data - Raw data returned by the Google Gemini API
 * @returns {Object} - Organized data
 */
const structureExtractedData = (data) => {
  const invoices = [];
  const products = [];
  const customers = [];

  data.documents.forEach((doc) => {
    // Process invoice data
    if (doc.type === 'invoice') {
      invoices.push({
        serial: doc.fields.serial_number?.value || 'N/A',
        customerName: doc.fields.customer_name?.value || 'Unknown',
        productName: doc.fields.product_name?.value || 'Unknown',
        qty: doc.fields.quantity?.value || 0,
        tax: doc.fields.tax?.value || 0,
        total: doc.fields.total_amount?.value || 0,
        date: doc.fields.date?.value || 'N/A',
      });
    }

    // Process product data
    if (doc.type === 'product') {
      products.push({
        name: doc.fields.name?.value || 'Unknown',
        qty: doc.fields.quantity?.value || 0,
        unitPrice: doc.fields.unit_price?.value || 0,
        tax: doc.fields.tax?.value || 0,
        priceWithTax: doc.fields.price_with_tax?.value || 0,
      });
    }

    // Process customer data
    if (doc.type === 'customer') {
      customers.push({
        name: doc.fields.customer_name?.value || 'Unknown',
        phone: doc.fields.phone_number?.value || 'Unknown',
        totalPurchase: doc.fields.total_purchase_amount?.value || 0,
      });
    }
  });

  return { invoices, products, customers };
};