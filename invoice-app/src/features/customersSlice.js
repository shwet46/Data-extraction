import { createSlice } from '@reduxjs/toolkit';

const customersSlice = createSlice({
  name: 'customers',
  initialState: [],
  reducers: {
    setCustomers: (state, action) => action.payload,
    updateCustomer: (state, action) => {
      const { id, updates } = action.payload;
      const index = state.findIndex((customer) => customer.id === id);
      if (index !== -1) state[index] = { ...state[index], ...updates };
    },
  },
});

export const { setCustomers, updateCustomer } = customersSlice.actions;
export default customersSlice.reducer;