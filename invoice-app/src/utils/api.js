import axios from 'axios';

// Gemini API endpoint for document processing
const GEMINI_API_URL = 'https://ai.google.dev/gemini-api/document-processing';

// API key for authentication (stored securely in .env)
const API_KEY = import.meta.env.VITE_API_KEY;

/**
 * Processes a file using the Google Gemini Document Processing API.
 * @param {File} file - The file to process (PDF, Excel, Image).
 * @returns {Promise<Object>} Extracted data (Invoices, Products, Customers).
 */
export const processFileWithAI = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post(GEMINI_API_URL, formData, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`, // API Key from environment variables
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data; // Processed data from Gemini API
  } catch (error) {
    console.error('Error processing file:', error.response || error.message);
    throw new Error('Failed to process the file with Gemini API.');
  }
};