import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/header.css";

function LogOut() {
  const { logout } = useAuth0();
  return (
      <button
        className="buttonHeaderLogin rigth"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Cerrar sesión
      </button>
  );
}

export default LogOut;
