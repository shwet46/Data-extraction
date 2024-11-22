import React from 'react';

const InvoicesTable = () => {
  const mockData = [
    { id: 1, serial: '001', name: 'John Doe', product: 'Laptop', qty: 1, tax: 10, total: 1000, date: '2024-11-20' },
  ];

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="border px-4 py-2">Serial</th>
          <th className="border px-4 py-2">Customer</th>
          <th className="border px-4 py-2">Product</th>
          <th className="border px-4 py-2">Quantity</th>
          <th className="border px-4 py-2">Tax</th>
          <th className="border px-4 py-2">Total</th>
          <th className="border px-4 py-2">Date</th>
        </tr>
      </thead>
      <tbody>
        {mockData.map((row) => (
          <tr key={row.id}>
            <td className="border px-4 py-2">{row.serial}</td>
            <td className="border px-4 py-2">{row.name}</td>
            <td className="border px-4 py-2">{row.product}</td>
            <td className="border px-4 py-2">{row.qty}</td>
            <td className="border px-4 py-2">{row.tax}</td>
            <td className="border px-4 py-2">{row.total}</td>
            <td className="border px-4 py-2">{row.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvoicesTable;