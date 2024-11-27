import { createSlice } from '@reduxjs/toolkit';

const customersSlice = createSlice({
    name: 'invoices',
    initialState: [],
    reducers: {
        setInvoices: (state, action) => action.payload,
    },
});

export const { setCustomers } = customersSlice.actions;
export default customersSlice.reducer;