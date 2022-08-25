import React from "react";
import { Link } from "react-router-dom";
import reactLogo from "../assets/logoReact.svg";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={reactLogo} alt="react logo" className="logo" />
      <Link to="/" className="link">
        Usuarios
      </Link>
      <Link to="/form" className="link">
        Formulario
      </Link>
    </nav>
  );
}

export default Navbar;
