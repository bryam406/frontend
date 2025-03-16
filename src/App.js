import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Importa el enrutador y las rutas
import React from 'react';
import Navbar from './components/Navbar'; // Importa el componente Navbar

const images = require.context('./assets/inicio', false, /\.(png|jpe?g|svg)$/);

// Obtenemos todas las imágenes y las convertimos en un objeto con el nombre de cada imagen
const imageMap = images.keys().reduce((map, imagePath) => {
  // Usamos el nombre del archivo (sin la carpeta y la extensión) como clave
  const name = imagePath.replace('./', '').replace(/\.(png|jpe?g|svg)$/, '');
  map[name] = images(imagePath); // Mapeamos el nombre a la ruta de la imagen
  return map;
}, {});





function App() {
  return (
    <Router>
      <Navbar />  {/* Incluye el Navbar en el layout general */}
      <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" className="active" aria-current="true" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active carousel-item">
            <img src={imageMap.inicio1} alt="Icono" height={500} style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
            <div className="container">
              <div className="carousel-caption">
                <h1>Example headline.</h1>
                <p className="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
                <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item carousel-item-next carousel-item">
            <img src={imageMap.inicio1} alt="Icono" height={500} style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
            <div className="container">
              <div className="carousel-caption">
                <h1>Another example headline.</h1>
                <p>Some representative placeholder content for the second slide of the carousel.</p>
                <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={imageMap.inicio1} alt="Icono" height={500} style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
            <div className="container">
              <div className="carousel-caption ">
                <h1>One more for good measure.</h1>
                <p>Some representative placeholder content for the third slide of this carousel.</p>
                <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Router>
  );
}

export default App;
