import { createSlice } from '@reduxjs/toolkit';

const invoicesSlice = createSlice({
  name: 'invoices',
  initialState: [],
  reducers: {
    addInvoice: (state, action) => {
      state.push(action.payload);
    },
    updateInvoice: (state, action) => {
      const index = state.findIndex((inv) => inv.serial === action.payload.serial);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
  },
});

export const { addInvoice, updateInvoice } = invoicesSlice.actions;
export default invoicesSlice.reducer;