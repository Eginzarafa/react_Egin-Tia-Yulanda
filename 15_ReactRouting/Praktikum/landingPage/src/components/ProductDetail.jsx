import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ tableData }) => {
  const { id } = useParams();
  const product = tableData.find((data) => data.id === parseInt(id));

  return (
    <div>
      <h2>Product Detail</h2>
      {product ? (
        <div>
          <p>Product ID: {product.id}</p>
          <p>Product Name: {product.name}</p>
          <p>Product Category: {product.category}</p>
          <p>Product Freshness: {product.freshness}</p>
          <p>Product Price: {product.price}</p>
          <p>Product Description: {product.description}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetail;
