import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/iconos/icono.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src={icon} alt="Logo" width="80" height="auto" />
        </Link>

        {/* Botón Hamburguesa para móviles */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú de navegación */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item">
              <Link to="/" className="nav-link">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/conocenos" className="nav-link">Conócenos</Link>
            </li>
            <li className="nav-item">
              <Link to="/calendario" className="nav-link">Calendario</Link>
            </li>
            <li className="nav-item">
              <Link to="/ministerios" className="nav-link">Ministerios</Link>
            </li>
            <li className="nav-item">
              <Link to="/album" className="nav-link">Álbum</Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link">Contacto</Link>
            </li>
            <li className="nav-item">
              <Link to="/donaciones" className="nav-link">Donaciones</Link>
            </li>
          </ul>

          {/* Botón de Login */}
          <div className="text-center">
            <button type="button" className="btn btn-outline-primary">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
