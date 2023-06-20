import React from "react";
import cart from "../images/cart.png";
import search from "../images/search.png";
import Login from "./Login";
import LogOut from "./LogOut";
import Porfile from "./Porfile";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/header.css";

function Header() {
  const { isAuthenticated } = useAuth0();
  // TODO: Corregir problema conexion; aparace iniciar sesión
  //TODO: crear el input para la busqueda(+ estilos)
  //TODO: Hacer funcional el boton de busqueda
  //TODO: hacer el funcional el boton del carrito

  return (
    <div className="containerHeader">
      <div className="buttonContainer">
        {isAuthenticated ? (
          <>
            <Porfile />
            <LogOut />
          </>
        ) : (
          <Login />
        )}
      </div>
      <div>
        <button className="buttonHeader">
          <img className="imageButtonHeader" src={search} alt="seach" />
        </button>
        <button className="buttonHeader">
          <img className="imageButtonHeader" src={cart} alt="seach" />
        </button>
      </div>
    </div>
  );
}

export default Header;
