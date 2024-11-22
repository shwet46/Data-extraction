import React from 'react';

const CustomersTable = () => {
  const mockData = [
    { id: 1, name: 'John Doe', phone: '123-456-7890', totalPurchase: 5000 },
  ];

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Phone Number</th>
          <th className="border px-4 py-2">Total Purchase Amount</th>
        </tr>
      </thead>
      <tbody>
        {mockData.map((row) => (
          <tr key={row.id}>
            <td className="border px-4 py-2">{row.name}</td>
            <td className="border px-4 py-2">{row.phone}</td>
            <td className="border px-4 py-2">{row.totalPurchase}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomersTable;