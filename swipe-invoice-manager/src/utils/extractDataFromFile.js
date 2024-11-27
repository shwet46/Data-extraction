import axios from 'axios';

const extractDataFromFile = async (file) => {
    const apiUrl = 'http://localhost:5000/api/extract'; // Use the proxy server URL
    const apiKey = import.meta.env.VITE_API_KEY; // Use import.meta.env

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await axios.post(apiUrl, formData, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data; // Extracted data
    } catch (error) {
        console.error('Error extracting data from file:', error);
        throw new Error('Data extraction failed');
    }
};

export default extractDataFromFile;