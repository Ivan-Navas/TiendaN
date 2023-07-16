import React, { useState } from "react";

export const Context = React.createContext({});

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [oneProduct, setOneProduct] = useState(null);

  const showProducts = async () => {
    //*Funcion que retorna todos los productos
    const url = "http://localhost:3900/api/products";
    let peticion = await fetch(url, {
      method: "GET",
    });
    let datos = await peticion.json();

    if (datos.status === "success") {
      setProducts(datos.product);
    }
  };

  const showOneProduct = async (identification) => {
    //*Funcion que retorna un solo producto
    const url = `http://localhost:3900/api/oneProduct/${identification}`;
    let peticion = await fetch(url, {
      method: "GET",
    });
    let datos = await peticion.json();
    if (datos.status === "success") {
      setOneProduct(datos.product);
    }
  };

  const separador = (numero) => {
    let parte = numero.toString().split(".");
    parte[0] = parte[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parte.join(".");
  };

  return (
    <Context.Provider
      value={{
        showProducts,
        products,
        oneProduct,
        setOneProduct,
        showOneProduct,
        separador,
      }}
    >
      {children}
    </Context.Provider>
  );
};
