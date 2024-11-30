import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (state, action) => action.payload,
    updateProduct: (state, action) => {
      const { id, updates } = action.payload;
      const index = state.findIndex((product) => product.id === id);
      if (index !== -1) state[index] = { ...state[index], ...updates };
    },
  },
});

export const { setProducts, updateProduct } = productsSlice.actions;
export default productsSlice.reducer;