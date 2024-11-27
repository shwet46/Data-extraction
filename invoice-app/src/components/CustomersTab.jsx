import React from 'react';
import { useSelector } from 'react-redux';

const CustomersTab = () => {
  const customers = useSelector(state => state.customers);

  const columns = [
    'Customer Name', 
    'Phone Number', 
    'Total Purchase Amount', 
    'Number of Invoices'
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
          {customers.length === 0 ? (
            <tr>
              <td 
                colSpan={columns.length} 
                className="text-center py-4 text-gray-500"
              >
                No customers found. Upload files to populate data.
              </td>
            </tr>
          ) : (
            customers.map((customer, index) => (
              <tr 
                key={index} 
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-4">{customer.name || '-'}</td>
                <td className="py-3 px-4">{customer.phoneNumber || '-'}</td>
                <td className="py-3 px-4">
                  {customer.totalPurchaseAmount 
                    ? `$${customer.totalPurchaseAmount.toFixed(2)}` 
                    : '-'
                  }
                </td>
                <td className="py-3 px-4">{customer.invoiceCount || 0}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTab;