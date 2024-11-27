import React from 'react';

const InvoicesTab = ({ invoices }) => (
    <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
            <tr>
                <th>Serial Number</th>
                <th>Customer Name</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Tax</th>
                <th>Total Amount</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {invoices.map((invoice) => (
                <tr key={invoice.id}>
                    <td>{invoice.serialNumber}</td>
                    <td>{invoice.customerName}</td>
                    <td>{invoice.productName}</td>
                    <td>{invoice.qty}</td>
                    <td>{invoice.tax}</td>
                    <td>{invoice.totalAmount}</td>
                    <td>{invoice.date}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default InvoicesTab;