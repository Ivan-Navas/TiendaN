import React, { useContext, useState } from "react";
import ProductCard from "./ProductCard";
import "../styles/product.css";
import  { Context } from '../Context/Context';

function Product() {
const contexto = useContext(Context)

  return (
    <div className="mainProducts">
      <ProductCard/>
    </div>
  );
}

export default Product;
