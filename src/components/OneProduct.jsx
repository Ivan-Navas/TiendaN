import React, { useContext, useEffect, useState } from "react";
import { VscCircleFilled } from "react-icons/vsc";
import { BsCartPlus } from "react-icons/bs";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import "../styles/product.css";
import { Context } from "../Context/Context";
import {useParams} from 'react-router-dom'

function OneProduct() {
  const oneProductContext = useContext(Context);
  const params = useParams();

  useEffect(() => {
    oneProductContext.showOneProduct(params.id);
  }, []);

  return (
    <>
      {oneProductContext.oneProduct != null ? (
        <div key={params.id} className="mainContainer">
          <div className="imageContainer">
            <img className="oneProductImage" alt="ProductImage" src={oneProductContext.oneProduct.image} />
          </div>
          <div className="oneProductInfoContainer">
            <div className="nameContainer">
              <h2 className="oneProductName">{oneProductContext.oneProduct.name}</h2>
              {oneProductContext.oneProduct.favorite == true ? (
                <AiFillHeart className="heartFill oneProductHeart" />
              ) : (
                <AiOutlineHeart className="heartOut oneProductHeart" />
              )}
            </div>
            <p className="oneProductPrice">${separador(oneProductContext.oneProduct.price)}</p>
            <div className="moreImagesContainer">
              <img className="moreImages img" alt={oneProductContext.oneProduct.name} src={oneProductContext.oneProduct.image} />
              <img className="moreImages" alt={oneProductContext.oneProduct.name} src={oneProductContext.oneProduct.image} />
            </div>
            <div className="oneProductStarSizeContainer">
              <div className="oneProductSizeContainer">
                <p className="oneProductSize">Talla:</p>
                <select className="oneProductSelect" name="" id="">
                  {[...new Array(1)].map((option, index) => {
                    return index < 1 ? (
                      <option className="oneProductOption">
                        {oneProductContext.oneProduct.size}
                      </option>
                    ) : (
                      <option value="No hay tallas disponibles"></option>
                    );
                  })}
                </select>
              </div>
              <div className="oneProductStarsContainer">
                {[...new Array(5)].map((star, index) => {
                  return index < oneProductContext.oneProduct.rating ? (
                    <AiFillStar className="starFill" />
                  ) : (
                    <AiOutlineStar className="starOutOne" />
                  );
                })}
              </div>
            </div>
            {oneProductContext.oneProduct.stock <= 2 ? (
              <p className="oneProductStock low">
                {" "}
                <VscCircleFilled /> {oneProductContext.oneProduct.stock} Disponible
              </p>
            ) : (
              <p className="oneProductStock up">
                {" "}
                <VscCircleFilled /> {oneProductContext.oneProduct.stock} Disponible
              </p>
            )}

            <div className="buyButtonContainer">
              <button className="buyButton">
                {" "}
                <BsCartPlus />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2 style={{ color: "#47c3de" }}>!Producto agotado¡</h2>
        </div>
      )}
    </>
  );
}

export default OneProduct;
