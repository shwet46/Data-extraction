import React, { useState } from 'react';

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  const handleUpload = () => {
    // Mock API call or logic to send files for AI processing
    console.log('Files uploaded:', files);
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-md mb-6">
      <h2 className="text-lg font-semibold mb-4">Upload Your Files</h2>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="mb-4"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Process Files
      </button>
    </div>
  );
};

export default FileUpload;