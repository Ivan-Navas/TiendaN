import React,{useContext, useEffect, useState} from "react";
import "../styles/product.css";
import cartAddImage from "../images/CartAddImage.png";
import {
  AiOutlineStar,
  AiFillStar,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";
import { separador } from "../functions/functions";
import { Context } from "../Context/Context";


function ProductCart() {

//TODO: Crear opciones para talla
//TODO: Hacer el evento de boton favorito
//TODO: Crear el carrito de compras

const productsContext = useContext(Context);
const [favorite, setFavorite] = useState("")

useEffect(() => {
  productsContext.showProducts();
}, []);

const favotiteProduct = async ()=>{
  const url = `http://localhost:3900/api/favorite/${productsContext.identification}`;
    let peticion = await fetch(url, {
      method: "PUT"
    });
    let datos = await peticion.json();


    if (datos.status === "success") {
      setFavorite(datos.product);
    }
}
console.log(favorite)
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
                      src={product.image}
                      alt="productImage"
                    />
                  </a>
                </div>
                <div className="priceContainer">
                  <p className="priceProduct">${separador(product.price)}</p>
                  <button id="heartImage" className="heartButton">
                    {product.favorite == true ? (
                      <AiFillHeart className="heartFill" onClick={()=>{
                        favotiteProduct();
                      }}  />
                    ) : (
                      <AiOutlineHeart className="heartOut" onClick={()=>{
                        favotiteProduct();
                      }} />
                    )}
                  </button>
                </div>
                <div  className="ratingContainer">
                  {[...new Array(5)].map((star, index) => {
          return index < product.rating ? (
            <AiFillStar key={Math.random(1,100)} className="starFill star" />
          ) : (
            <AiOutlineStar key={Math.random(1,100)} className="starOut star" />
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
