import React from 'react';
import { useDispatch } from 'react-redux';
import { setInvoices } from '../features/invoicesSlice';
import { setProducts } from '../features/productsSlice';
import { setCustomers } from '../features/customersSlice';
import FileUploader from '../components/FileUploader';

const HomePage = () => {
  const dispatch = useDispatch();

  const handleExtractedData = (data) => {
    dispatch(setInvoices(data.invoices || []));
    dispatch(setProducts(data.products || []));
    dispatch(setCustomers(data.customers || []));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Upload Your File</h1>
      <FileUploader onExtractedData={handleExtractedData} />
    </div>
  );
};

export default HomePage;