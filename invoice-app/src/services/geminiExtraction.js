import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

export const extractDataFromFile = async (file) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    
    // Convert file to base64
    const reader = new FileReader();
    reader.readAsDataURL(file);
    
    const base64File = await new Promise((resolve) => {
      reader.onloadend = () => resolve(reader.result);
    });

    const prompt = `
      Extract structured data from this document:
      - Identify invoice details (date, total amount, serial number)
      - List all products (name, quantity, price, tax)
      - Extract customer information (name, phone number, total purchase)
      
      Return data in this JSON format:
      {
        "invoices": [
          {
            "serialNumber": "",
            "customerName": "",
            "productName": "",
            "quantity": 0,
            "tax": 0.0,
            "totalAmount": 0.0,
            "date": ""
          }
        ],
        "products": [
          {
            "name": "",
            "quantity": 0,
            "unitPrice": 0.0,
            "tax": 0.0,
            "priceWithTax": 0.0
          }
        ],
        "customers": [
          {
            "name": "",
            "phoneNumber": "",
            "totalPurchaseAmount": 0.0,
            "invoiceCount": 0
          }
        ]
      }
    `;

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [
        { text: prompt },
        { inlineData: { mimeType: file.type, data: base64File.split(',')[1] } }
      ]}]
    });

    const response = result.response.text();
    return JSON.parse(response);
  } catch (error) {
    console.error("Extraction Error:", error);
    throw error;
  }
};