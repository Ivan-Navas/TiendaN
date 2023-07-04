import React from "react";
import { useState, useEffect } from "react";
import "../styles/product.css";
import cartAddImage from "../images/CartAddImage.png";
import {
  AiOutlineStar,
  AiFillStar,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";
import { allProducts } from "../functions/functions";
import { separador } from "../functions/functions";

function ProductCart() {
  //TODO: Cambiar la api de rick y morty por los productos reales
  //TODO: Crear opciones para talla
  //TODO: Hacer el evento de boton favorito
  //TODO: Crear el carrito de compras

  const [products, setProducts] = useState(null);
  useEffect(() => {
    allProducts(setProducts);
  }, []);

  return (
    <>
      {products != null ? (
        <>
          {products.map((product) => (
            <div key={product.id} className="productMainContainer">
              <div className="productContainer">
                <h2 className="productTittle">{product.name}</h2>
                <div className="productImageContainer">
                  <a href={`/product/${product.id}`}>
                    <img
                      className="productImage"
                      src={product.image}
                      alt="productImage"
                    />
                  </a>
                </div>
                <div className="priceContainer">
                  <p className="priceProduct">${separador(product.id)}</p>
                  <button id="heartImage" className="heartButton">
                    {product.status == "Alive" ? (
                      <AiFillHeart className="heartFill" />
                    ) : (
                      <AiOutlineHeart className="heartOut" />
                    )}
                  </button>
                </div>
                <div className="ratingContainer">
                  {[...new Array(5)].map((star, index) => {
          return index < product.id ? (
            <AiFillStar className="starFill" />
          ) : (
            <AiOutlineStar className="starOut" />
          );
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
      ) : (
        "No hay productos"
      )}
    </>
  );
}

export default ProductCart;
