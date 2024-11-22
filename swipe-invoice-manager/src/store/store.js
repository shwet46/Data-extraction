import { configureStore } from '@reduxjs/toolkit';
import invoicesSlice from '../features/invoicesSlice';
import productsSlice from '../features/productsSlice';
import customersSlice from '../features/customersSlice';

export default configureStore({
  reducer: {
    invoices: invoicesSlice,
    products: productsSlice,
    customers: customersSlice,
  },
});