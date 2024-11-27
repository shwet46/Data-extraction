import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'invoices',
    initialState: [],
    reducers: {
        setInvoices: (state, action) => action.payload,
    },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;