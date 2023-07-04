import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/header.css";

function Login() {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <button className="buttonHeaderLogin" onClick={() => loginWithRedirect()}>
        Iniciar sesión
      </button>
    </>
  );
}

export default Login;
