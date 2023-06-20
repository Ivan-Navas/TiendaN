import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { oneProduct } from "../functions/functions";
import { separador } from "../functions/functions";
import { VscCircleFilled } from "react-icons/vsc";
import { BsCartPlus } from "react-icons/bs";
import "../styles/product.css";

function OneProduct() {
  const [product, setProduct] = useState(null);
  const params = useParams();

  useEffect(() => {
    oneProduct(params.id, setProduct);
  }, []);
  return (
    <>
      {product != null ? (
        <div className="mainContainer">
          <div className="imageContainer">
            <img
              className="oneProductImage"
              src={product.image}
              alt="ProductImage"
            />
          </div>
          <div className="oneProductInfoContainer">
            <h2 className="oneProductName">{product.name}</h2>
            <p className="oneProductPrice">${separador(1000000)}</p>
            <div className="moreImagesContainer">
                <img  className="moreImages" src={product.image} alt={product.name} />
                <img  className="moreImages" src={product.image} alt={product.name} />
            </div>
            <p className="oneProductSize">Talla: {params.id}</p>
            {product.id <= 2 ? (
              <p className="oneProductStock low">
                {" "}
                <VscCircleFilled /> {product.id} Disponible
              </p>
            ) : (
              <p className="oneProductStock up">
                {" "}
                <VscCircleFilled /> {product.id} Disponible
              </p>
            )}

            <div className="buyButtonContainer">
            <button className="buyButton"> <BsCartPlus /></button>
            </div>
          </div>
          
        </div>
      ) : (
        "El personaje no existe"
      )}
    </>
  );
}

export default OneProduct;
