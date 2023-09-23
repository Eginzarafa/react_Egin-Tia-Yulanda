import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetail = ({ product }) => {
  const location = useLocation();
  const selectedProduct = location.state.selectedProduct;
  return (
    <div>
      <h2>Product Detail</h2>
      <p>ID: {selectedProduct.id}</p>
      <p>Name: {selectedProduct.name}</p>
      <p>Category: {selectedProduct.category}</p>
      <p>Freshness: {selectedProduct.freshness}</p>
      <p>Price: ${selectedProduct.price}</p>
      <p>Description: {selectedProduct.description}</p>
      {selectedProduct.image && (
        <img
          src={URL.createObjectURL(selectedProduct.image)}
          alt={`product Image for ${selectedProduct.name}`}
          width="100"
        />
      )}
    </div>
  );
};

export default ProductDetail;
