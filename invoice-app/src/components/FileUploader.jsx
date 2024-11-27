import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { extractDataFromFile } from '../services/geminiExtraction';
import { addInvoices } from '../redux/store';
import { addProducts } from '../redux/store';
import { addCustomers } from '../redux/store';

const FileUploader = () => {
  const [dragActive, setDragActive] = useState(false);
  const dispatch = useDispatch();

  const handleFileUpload = async (files) => {
    for (let file of files) {
      try {
        // Supported file types
        const supportedTypes = [
          'application/pdf', 
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          'image/jpeg', 
          'image/png'
        ];

        if (!supportedTypes.includes(file.type)) {
          alert(`Unsupported file type: ${file.type}`);
          continue;
        }

        // Extract data using Gemini AI
        const extractedData = await extractDataFromFile(file);

        // Dispatch actions to update Redux store
        if (extractedData.invoices) {
          dispatch(addInvoices(extractedData.invoices));
        }

        if (extractedData.products) {
          dispatch(addProducts(extractedData.products));
        }

        if (extractedData.customers) {
          dispatch(addCustomers(extractedData.customers));
        }
      } catch (error) {
        console.error('File processing error:', error);
        alert('Failed to process file. Please check the file and try again.');
      }
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === 'dragenter' || e.type === 'dragover');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileUpload(e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileUpload(e.target.files);
    }
  };

  return (
    <div 
      className={`p-6 border-2 border-dashed rounded-lg mb-4 text-center 
        ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input 
        type="file" 
        multiple
        onChange={handleChange}
        accept=".pdf,.xlsx,.xls,.jpg,.jpeg,.png"
        className="hidden"
        id="file-upload"
      />
      <label 
        htmlFor="file-upload" 
        className="cursor-pointer block"
      >
        <div className="py-8">
          <svg 
            className="mx-auto h-12 w-12 text-gray-400" 
            stroke="currentColor" 
            fill="none" 
            viewBox="0 0 48 48"
          >
            <path 
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" 
              strokeWidth={2} 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </svg>
          <p className="mt-2 text-sm text-gray-600">
            Drag and drop files or <span className="text-blue-600">browse</span>
          </p>
          <p className="text-xs text-gray-500">
            PDF, Excel, JPEG, PNG
          </p>
        </div>
      </label>
    </div>
  );
};

export default FileUploader;