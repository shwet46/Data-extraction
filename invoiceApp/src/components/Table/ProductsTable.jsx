import React from 'react';

const ProductsTable = () => {
  const mockData = [
    { id: 1, name: 'Laptop', qty: 5, unitPrice: 1000, tax: 50, priceWithTax: 1050 },
  ];

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Quantity</th>
          <th className="border px-4 py-2">Unit Price</th>
          <th className="border px-4 py-2">Tax</th>
          <th className="border px-4 py-2">Price with Tax</th>
        </tr>
      </thead>
      <tbody>
        {mockData.map((row) => (
          <tr key={row.id}>
            <td className="border px-4 py-2">{row.name}</td>
            <td className="border px-4 py-2">{row.qty}</td>
            <td className="border px-4 py-2">{row.unitPrice}</td>
            <td className="border px-4 py-2">{row.tax}</td>
            <td className="border px-4 py-2">{row.priceWithTax}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;