import React, { useState,useEffect } from "react";

export const Context = React.createContext({});

export const ContextProvider = ({ children }) => {
  const [identification, setIdentification] = useState("6495c653b0f1b5a73bbdfe1a");
  const [products, setProducts] = useState([]);
  const [oneProduct, setOneProduct] = useState(null);


  const showProducts = async () => {//*Funcion que retorna todos los productos
    const url = "http://localhost:3900/api/products";
    let peticion = await fetch(url, {
      method: "GET",
    });
    let datos = await peticion.json();

    if (datos.status === "success") {
      setProducts(datos.product);
    }
  };

 

  const showOneProduct = async () => {//*Funcion que retorna un solo producto
    const url = `http://localhost:3900/api/oneProduct/${identification}`;
    let peticion = await fetch(url, {
      method: "GET",
    });
    let datos = await peticion.json();

    if (datos.status === "success") {
      setOneProduct(datos.product);
    }
  };

 

  return (
    <Context.Provider
      value={{
        identification,
        setIdentification,
        showProducts,
        products,
        oneProduct,
        setOneProduct,
        showOneProduct,
      }}
    >
      {children}
    </Context.Provider>
  );
};