import React from 'react';

const ValidationMessage = ({ errors }) => {
  if (!errors || errors.length === 0) return null;

  return (
    <div className="bg-red-100 text-red-800 p-4 rounded-md mb-4">
      <h3 className="font-bold">Validation Errors:</h3>
      <ul className="list-disc ml-5">
        {errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    </div>
  );
};

export default ValidationMessage;