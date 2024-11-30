import { createSlice } from '@reduxjs/toolkit';

const invoicesSlice = createSlice({
  name: 'invoices',
  initialState: [],
  reducers: {
    setInvoices: (state, action) => action.payload,
    updateInvoice: (state, action) => {
      const { id, updates } = action.payload;
      const index = state.findIndex((invoice) => invoice.id === id);
      if (index !== -1) state[index] = { ...state[index], ...updates };
    },
  },
});

export const { setInvoices, updateInvoice } = invoicesSlice.actions;
export default invoicesSlice.reducer;