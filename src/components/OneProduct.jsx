import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { oneProduct } from "../functions/functions";
import { separador } from "../functions/functions";
import { VscCircleFilled } from "react-icons/vsc";
import { BsCartPlus } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
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
              <img
                className="moreImages"
                src={product.image}
                alt={product.name}
              />
              <img
                className="moreImages"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="oneProductStarSizeContainer">
              <div className="oneProductSizeContainer">
                <p className="oneProductSize">Talla:</p>
                <select className="oneProductSelect" name="" id="">
                  {[...new Array(product.id)].map((option, index) => {
                    return index < product.id ? (
                      <option className="oneProductOption">
                        {product.name}
                      </option>
                    ) : (
                      <option value="No hay tallas disponibles"></option>
                    );
                  })}
                </select>
              </div>
              <div className="oneProductStarsContainer">
                {[...new Array(5)].map((star, index) => {
                  return index < product.id ? (
                    <AiFillStar className="starFill" />
                  ) : (
                    <AiOutlineStar className="starOutOne" />
                  );
                })}
              </div>
            </div>
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
              <button className="buyButton">
                {" "}
                <BsCartPlus />
              </button>
            </div>
          </div>
        </div>
      ) : (
        "El producto no existe"
      )}
    </>
  );
}

export default OneProduct;
