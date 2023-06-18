import React from "react";
import { useState, useEffect } from "react";
import "../styles/product.css";
import heartImage from "../images/heartImage.png";
import cartAddImage from "../images/CartAddImage.png";
import { data } from "../data/data";
import defaultImage from "../images/defaultImage.png";
import {AiOutlineStar,AiFillStar,AiOutlineShoppingCart} from 'react-icons/ai'

console.log(data);

function ProductCart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  if (products.length === 0) {
    return <h1>No hay productos que mostrar</h1>;
  }

  const separador = (numero) => {
    let parte = numero.toString().split(".");
    parte[0] = parte[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parte.join(".");
  };

  return (
    <>
      {products.map((product) => (
        <div key={product.length} className="productMainContainer">
          <div className="productContainer">
            <h2 className="productTittle">{product.productName}</h2>
            <div className="productImageContainer">
            <img
              className="productImage"
              src={defaultImage}
              alt="productImage"
            />
            </div>
            <div className="priceContainer">
              <p className="priceProduct">${separador(product.productPrice)}</p>
              <button
                id="heartImage"
                className="heartButton"
                onClick={() => {
                  alert("Presionaste el boton");
                }}
              >
                <img className="heartImage" src={heartImage} alt="heartImage" />
              </button>
            </div>
            <div className="ratingContainer">
              {[... new Array(5)].map((star, index)=>{
                return index< product.productRating ? <AiFillStar className="starFill"/>: <AiOutlineStar className="starOut"/>
              })}
            </div>
            <div className="containerButton">
              <button className="productButton">
                <img
                  className="productImageButton"
                  src={cartAddImage}
                  alt="cartAddImage"
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductCart;
