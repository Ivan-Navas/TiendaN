import React from "react";
import '../styles/storeInfo.css'
import logo from '../images/logo.png'


function StoreInfo() {
  return (
    <div className="containerMainInfo">
      <div className="containerInfo">
        <div className="info">
          <h2 className="tittleInfo">Nombre de la tienda</h2>
          <p className="infoStore">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit molestiae ab ipsa quaerat magni dolores expedita sed, libero vero autem, deleniti tempore suscipit perspiciatis saepe amet? Consequatur unde quos animi!</p>
          <div className="buttonContainer">
            <a href={`/products`} className="buttonVamos">¡Vamos!</a>
          </div>
        </div>
        
          <img className="imageLogoInfo" src={logo} alt="Logo" />
        
      </div>
    </div>
  );
}

export default StoreInfo;
