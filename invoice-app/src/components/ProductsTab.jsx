import React from 'react';
import { useSelector } from 'react-redux';

const ProductsTab = () => {
  const products = useSelector(state => state.products);

  const columns = [
    'Name', 
    'Quantity', 
    'Unit Price', 
    'Tax', 
    'Price with Tax', 
    'Discount'
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
          {products.length === 0 ? (
            <tr>
              <td 
                colSpan={columns.length} 
                className="text-center py-4 text-gray-500"
              >
                No products found. Upload files to populate data.
              </td>
            </tr>
          ) : (
            products.map((product, index) => (
              <tr 
                key={index} 
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-4">{product.name || '-'}</td>
                <td className="py-3 px-4">{product.quantity || '-'}</td>
                <td className="py-3 px-4">{product.unitPrice ? `$${product.unitPrice.toFixed(2)}` : '-'}</td>
                <td className="py-3 px-4">{product.tax ? `$${product.tax.toFixed(2)}` : '-'}</td>
                <td className="py-3 px-4">
                  {product.priceWithTax 
                    ? `$${product.priceWithTax.toFixed(2)}` 
                    : '-'
                  }
                </td>
                <td className="py-3 px-4">
                  {product.discount 
                    ? `${product.discount}%` 
                    : 'N/A'
                  }
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTab;