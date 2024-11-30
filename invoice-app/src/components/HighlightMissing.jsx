import React from 'react';

const HighlightMissing = ({ errors }) => {
  return (
    <div className="p-4 border border-red-500 bg-red-100 rounded-md mb-4">
      <h3 className="font-bold text-red-600 mb-2">Errors Detected:</h3>
      <ul>
        {errors.map((error, index) => (
          <li key={index} className="text-red-500">
            {error}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HighlightMissing;