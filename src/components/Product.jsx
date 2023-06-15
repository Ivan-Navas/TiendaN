import React from "react";
import ProductCart from "./ProductCart";
import "../styles/product.css";
import jordan from '../images/jordan.jpg'
import buzo from '../images/buzo.webp'
import jersey from '../images/jersey.webp'
import gorra from '../images/gorra.webp'

function Product() {
  return (
    <div className="mainProducts">
      <ProductCart producName="Buzo Ataque a los titanes" price="53000" image={buzo} />
      <ProductCart producName="Air Jordan 1" price="340000" image={jordan} />
      <ProductCart producName="Gorra Nike" price="120000" image={gorra} />
      <ProductCart producName="Jersey Toronto Raptors" price="200000" image={jersey} />
    </div>
  );
}

export default Product;
