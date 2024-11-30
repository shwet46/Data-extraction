import React from 'react';
import { useSelector } from 'react-redux';
import Table from '../components/Table';

const Invoices = () => {
  const invoices = useSelector((state) => state.invoices);

  const columns = ['Serial Number', 'Customer Name', 'Product Name', 'Quantity', 'Tax', 'Total Amount', 'Date'];

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Invoices</h2>
      <Table columns={columns} data={invoices} />
    </div>
  );
};

export default Invoices;