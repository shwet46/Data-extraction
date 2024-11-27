import React from 'react';

const ProductsTab = ({ products }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Quantity</th>
                        <th className="border px-4 py-2">Unit Price</th>
                        <th className="border px-4 py-2">Tax</th>
                        <th className="border px-4 py-2">Price with Tax</th>
                        <th className="border px-4 py-2">Discount (Optional)</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id} className="hover:bg-gray-100">
                            <td className="border px-4 py-2">{product.name}</td>
                            <td className="border px-4 py-2">{product.quantity}</td>
                            <td className="border px-4 py-2">{product.unitPrice}</td>
                            <td className="border px-4 py-2">{product.tax}</td>
                            <td className="border px-4 py-2">{product.priceWithTax}</td>
                            <td className="border px-4 py-2">{product.discount || 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsTab;