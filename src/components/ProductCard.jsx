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
import {separador} from '../functions/functions'

function ProductCart() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    allProducts(setProducts);
  }, []);

  const favoriteButton = () => {
    setProducts.productFavorite(!products.productFavorite);
  };
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
                  <button
                    id="heartImage"
                    className="heartButton"
                    onClick={favoriteButton}
                  >
                    {product.status == "Alive" ? (
                      <AiFillHeart className="heartFill" />
                    ) : (
                      <AiOutlineHeart className="heartOut" />
                    )}
                  </button>
                </div>
                <div className="ratingContainer">
                  {/* {[...new Array(5)].map((star, index) => {
          return index < 2 ? (
            <AiFillStar className="starFill" />
          ) : (
            <AiOutlineStar className="starOut" />
          );
        })} */}
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
