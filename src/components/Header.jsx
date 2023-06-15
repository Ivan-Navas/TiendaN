import React from "react";
import userIcon from '../images/userIcon.jpg'
import cart from '../images/cart.png'
import search from '../images/search.png'
import  '../styles/header.css'

function Header() {
  return (
  <div className="containerHeader">
      <div>
        <button className="buttonHeaderLogin">Iniciar sesión</button>
        <button className="buttonHeaderLogin rigth">Registrarse</button>
      </div>
      <div>
        <button className="buttonHeader">
          <img className="imageButtonHeader" src={search} alt="seach" />
        </button>
        <button className="buttonHeader"> 
          <img  className="imageButtonHeader" src={cart} alt="seach" />
        </button>
      </div>
  </div>
  )
}

export default Header;
