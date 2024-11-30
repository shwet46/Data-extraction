import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '../components/Table';
import { updateCustomer } from '../features/customersSlice';

const Customers = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers);

  const columns = ['Customer Name', 'Phone Number', 'Total Purchase Amount'];

  const handleEdit = (id, field, value) => {
    dispatch(updateCustomer({ id, updates: { [field]: value } }));
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Customers</h2>
      <Table
        columns={columns}
        data={customers.map((customer) => ({
          ...customer,
          actions: (
            <button
              onClick={() => alert(`Edit customer: ${customer.name}`)}
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

export default Customers;