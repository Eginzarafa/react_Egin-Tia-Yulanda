import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
      name: "John",
      category: "Doe",
      freshness: "Doe",
      price: "Doe",
      image: "Doe",
      additionalDescription: "Doe",
    },
  ],
  editIndex: -1, // Initialize editIndex to -1
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action) => {
      const { index, updatedProduct } = action.payload;
      state.products[index] = updatedProduct;
    },
    deleteProduct: (state, action) => {
      state.products.splice(action.payload.index, 1);
    },
    setEditIndex: (state, action) => {
      state.editIndex = action.payload;
    },
  },
});

export const { addProduct, updateProduct, deleteProduct, setEditIndex } =
  productSlice.actions;
export default productSlice.reducer;
