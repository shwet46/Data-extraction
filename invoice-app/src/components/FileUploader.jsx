import React, { useState } from 'react';
import { processFileWithAI } from '../utils/api';

const FileUploader = ({ onExtractedData }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setLoading(true);
    setError(null);

    try {
      // Use API utility to process the file
      const data = await processFileWithAI(file);
      onExtractedData(data); // Pass the extracted data to the parent
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-md">
      <input
        type="file"
        accept=".pdf,.xlsx,.csv,.png,.jpg"
        onChange={handleFileUpload}
        className="block w-full"
      />
      {loading && <p className="text-blue-500 mt-2">Processing file...</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default FileUploader;