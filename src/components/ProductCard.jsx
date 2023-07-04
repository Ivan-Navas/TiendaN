import React,{useContext, useEffect} from "react";
import "../styles/product.css";
import cartAddImage from "../images/CartAddImage.png";
import {
  AiOutlineStar,
  AiFillStar,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";
import { separador } from "../functions/functions";
import defaultImage from '../images/defaultImage.png'
import { Context } from "../Context/Context";


function ProductCart() {

//TODO: Crear opciones para talla
//TODO: Hacer el evento de boton favorito
//TODO: Crear el carrito de compras

const productsContext = useContext(Context);

useEffect(() => {
  productsContext.showProducts();
}, []);
  return (
    <>
      {productsContext.products.length != 0 ? (
        <>
          {productsContext.products.map((product) => (
            <div key={product._id} className="productMainContainer">
              <div className="productContainer">
                <h2 className="productTittle">{product.name}</h2>
                <div className="productImageContainer">
                  <a href={`/oneProduct/${product._id}`} 
                  onClick={()=>{
                    sendId(product._id)
                  }}>
                    <img
                      className="productImage"
                      src={defaultImage}
                      alt="productImage"
                    />
                  </a>
                </div>
                <div className="priceContainer">
                  <p className="priceProduct">${separador(product.price)}</p>
                  <button id="heartImage" className="heartButton">
                    {product.favorite == true ? (
                      <AiFillHeart className="heartFill" />
                    ) : (
                      <AiOutlineHeart className="heartOut" />
                    )}
                  </button>
                </div>
                <div  className="ratingContainer">
                  {[...new Array(5)].map((star, index) => {
          return index < product.rating ? (
            <AiFillStar key={Math.random(1,100)} className="starFill" />
          ) : (
            <AiOutlineStar key={Math.random(1,100)} className="starOut" />
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
        <div style={{width: '100vw', border: '1px silid'}}>
          <h2 style={{color: '#47c3de', textAlign:'center'}}>No hay Productos</h2>
        </div>
      )}
    </>
  );
}

export default ProductCart;
