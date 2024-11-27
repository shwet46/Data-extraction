import React from 'react';

const FileUpload = ({ onUpload }) => {
    const handleFileChange = (event) => {
        const files = event.target.files;
        onUpload(files);
    };

    return (
        <input
            type="file"
            accept=".pdf,.xls,.xlsx,.jpg,.jpeg,.png"
            multiple
            onChange={handleFileChange}
            className="p-2 border border-gray-300 rounded"
        />
    );
};

export default FileUpload;