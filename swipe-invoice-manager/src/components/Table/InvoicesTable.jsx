import React from 'react';
import { useSelector } from 'react-redux';

const InvoicesTable = () => {
  const invoices = useSelector((state) => state.invoices);

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
        {invoices.map((invoice) => (
          <tr key={invoice.serial}>
            <td className="border px-4 py-2">{invoice.serial}</td>
            <td className="border px-4 py-2">{invoice.customerName}</td>
            <td className="border px-4 py-2">{invoice.productName}</td>
            <td className="border px-4 py-2">{invoice.qty}</td>
            <td className="border px-4 py-2">{invoice.tax}</td>
            <td className="border px-4 py-2">{invoice.total}</td>
            <td className="border px-4 py-2">{invoice.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvoicesTable;