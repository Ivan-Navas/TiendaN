import React from "react";
import "../styles/product.css";
import heartImage from "../images/heartImage.png";
import cartAddImage from "../images/CartAddImage.png";
import star from "../images/star.png";

function ProductCart({ producName, price, image }) {

  const heart_image = document.getElementById("heartImage");



  return (
    <div className="productMainContainer">
      <div className="productContainer">
        <h2 className="productTittle">{producName}</h2>
        <img className="productImage" src={image} alt="productImage" />
        <div className="priceContainer">
          <p className="priceProduct">${price}</p>
          <button id="heartImage"  className="heartButton" onClick={()=>{
            alert("Presionaste el boton")
          }}>
            <img className="heartImage" src={heartImage} alt="heartImage" />
          </button>
        </div>
        <div className="ratingContainer">
          <button className="starButton">
            <img className="starIcon" src={star} alt="starIcon" />
          </button>
          <button className="starButton">
            <img className="starIcon" src={star} alt="starIcon" />
          </button>
          <button className="starButton">
            <img className="starIcon" src={star} alt="starIcon" />
          </button>
          <button className="starButton">
            <img className="starIcon" src={star} alt="starIcon" />
          </button>
          <button className="starButton">
            <img className="starIcon" src={star} alt="starIcon" />
          </button>
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
  );
}

export default ProductCart;
