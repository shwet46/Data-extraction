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
      const result = await processFiles(files);

      // Distribute extracted data into slices
      result.invoices.forEach((invoice) => dispatch(addInvoice(invoice)));
      result.products.forEach((product) => dispatch(addProduct(product)));
      result.customers.forEach((customer) => dispatch(addCustomer(customer)));

      setIsLoading(false);
    } catch (err) {
      setError('Error processing files. Please try again.');
      setIsLoading(false);
    }
  };

  return { processUploadedFiles, isLoading, error };
};

export default useFileProcessing;