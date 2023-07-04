import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/header.css'

function Porfile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    isAuthenticated && (
      <div className="porfileContainer">
        <img className="userImage" src={user.picture} alt={user.name} />
      </div>
    )
  );
}

export default Porfile;
