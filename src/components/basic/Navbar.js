import React from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/iconos/icono.png";

function Navbar() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-between">
        <div className="col-md-3 mb-2 mb-md-0">
          <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
            <img src={icon} alt="Logo" width="80" height="auto" />
          </Link>
        </div>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="frontend/" className="nav-link px-2 link-secondary">Inicio</Link></li>

          <li><Link to="/conocenos" className="nav-link px-2">Conócenos</Link></li>
          <li><Link to="/calendario" className="nav-link px-2">Calendario</Link></li>
          <li><Link to="/ministerios" className="nav-link px-2">Ministerios</Link></li>
          <li><Link to="/album" className="nav-link px-2">Álbum</Link></li>
          <li><Link to="/contacto" className="nav-link px-2">Contacto</Link></li>
          <li><Link to="/donaciones" className="nav-link px-2">Donaciones</Link></li>
        </ul>
        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">Login</button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
