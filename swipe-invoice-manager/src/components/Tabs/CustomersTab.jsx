import React from 'react';

const CustomersTab = ({ customers }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border px-4 py-2">Customer Name</th>
                        <th className="border px-4 py-2">Phone Number</th>
                        <th className="border px-4 py-2">Total Purchase Amount</th>
                        <th className="border px-4 py-2">Additional Info (Optional)</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <tr key={customer.id} className="hover:bg-gray-100">
                            <td className="border px-4 py-2">{customer.name}</td>
                            <td className="border px-4 py-2">{customer.phoneNumber}</td>
                            <td className="border px-4 py-2">{customer.totalPurchaseAmount}</td>
                            <td className="border px-4 py-2">{customer.additionalInfo || 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomersTab;