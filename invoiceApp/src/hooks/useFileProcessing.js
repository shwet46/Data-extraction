import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addInvoice } from '../features/invoicesSlice';
import { addProduct } from '../features/productsSlice';
import { addCustomer } from '../features/customersSlice';
import { processFiles } from '../services/aiService';

const useFileProcessing = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const processUploadedFiles = async (files) => {
    setIsLoading(true);
    setError(null);

    try {
      const { invoices, products, customers } = await processFiles(files);

      // Dispatch structured data to Redux slices
      invoices.forEach((invoice) => dispatch(addInvoice(invoice)));
      products.forEach((product) => dispatch(addProduct(product)));
      customers.forEach((customer) => dispatch(addCustomer(customer)));

      setIsLoading(false);
    } catch (err) {
      setError('Failed to process files. Please check the file format.');
      console.error(err);
      setIsLoading(false);
    }
  };

  return { processUploadedFiles, isLoading, error };
};

export default useFileProcessing;