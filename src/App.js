import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/basic/Navbar";
import Footer from "./components/basic/footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// Importar las páginas
import Conocenos from "./pages/conocenos";
import Calendario from "./pages/calendario";
import Ministerios from "./pages/ministerios";
import Album from "./pages/album";
import Contacto from "./pages/contacto";
import Donaciones from "./pages/donaciones";
import Inicio from "./pages/inicio"; // Asegúrate de que Inicio incluya el Slider si es necesario.

function App() {
  return (
    <Router>
      <Navbar />
      <main className="root">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/conocenos" element={<Conocenos />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/ministerios" element={<Ministerios />} />
          <Route path="/album" element={<Album />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/donaciones" element={<Donaciones />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
