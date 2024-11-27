import React from 'react';
import { useSelector } from 'react-redux';

const InvoicesTab = () => {
  const invoices = useSelector(state => state.invoices);

  const columns = [
    'Serial Number', 
    'Customer Name', 
    'Product Name', 
    'Quantity', 
    'Tax', 
    'Total Amount', 
    'Date'
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
          <tr>
            {columns.map((column, index) => (
              <th 
                key={index} 
                className="py-3 px-4 text-left"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {invoices.length === 0 ? (
            <tr>
              <td 
                colSpan={columns.length} 
                className="text-center py-4 text-gray-500"
              >
                No invoices found. Upload files to populate data.
              </td>
            </tr>
          ) : (
            invoices.map((invoice, index) => (
              <tr 
                key={index} 
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-4">{invoice.serialNumber || '-'}</td>
                <td className="py-3 px-4">{invoice.customerName || '-'}</td>
                <td className="py-3 px-4">{invoice.productName || '-'}</td>
                <td className="py-3 px-4">{invoice.quantity || '-'}</td>
                <td className="py-3 px-4">{invoice.tax ? `$${invoice.tax.toFixed(2)}` : '-'}</td>
                <td className="py-3 px-4">{invoice.totalAmount ? `$${invoice.totalAmount.toFixed(2)}` : '-'}</td>
                <td className="py-3 px-4">{invoice.date || '-'}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InvoicesTab;