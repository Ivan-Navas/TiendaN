import React, { useContext, useState } from "react";
import ProductCard from "./ProductCard";
import "../styles/product.css";


function Product() {
  return (
    <div className="mainProducts">
      <ProductCard/>
    </div>
  );
}

export default Product;
