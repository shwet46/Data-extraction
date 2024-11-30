import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '../components/Table';
import { updateProduct } from '../features/productsSlice';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const columns = ['Name', 'Quantity', 'Unit Price', 'Tax', 'Price with Tax', 'Discount'];

  const handleEdit = (id, field, value) => {
    dispatch(updateProduct({ id, updates: { [field]: value } }));
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Products</h2>
      <Table
        columns={columns}
        data={products.map((product) => ({
          ...product,
          actions: (
            <button
              onClick={() => alert(`Edit product: ${product.name}`)}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              Edit
            </button>
          ),
        }))}
      />
    </div>
  );
};

export default Products;