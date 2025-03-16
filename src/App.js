import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Importa el enrutador y las rutas
import React from 'react';
import Navbar from './components/Navbar'; // Importa el componente Navbar
import Footer from './components/footer'; // Importa el componente Navbar

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
      <main>
        <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" className="active" aria-current="true" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active carousel-item">
              <img src={imageMap.inicio1} alt="Icono" height={550} style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
              <div className="container">
                <div className="carousel-caption">
                  <h1>Example headline.</h1>
                  <p className="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
                  <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item carousel-item-next carousel-item">
              <img src={imageMap.inicio1} alt="Icono" height={550} style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
              <div className="container">
                <div className="carousel-caption">
                  <h1>Another example headline.</h1>
                  <p>Some representative placeholder content for the second slide of the carousel.</p>
                  <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={imageMap.inicio1} alt="Icono" height={550} style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
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


        <div class="container marketing">
          <hr class="featurette-divider"></hr>
          <div class="row featurette">
            <div class="col-md-9">
              <h2 class="featurette-heading fw-normal lh-1">Reconciliación y
                Restauración</h2>
              <p class="lead">Creemos firmemente en el poder transformador de la reconciliación y la restauración. Nuestro lema no es solo una frase, sino un llamado a
                la acción. En un mundo lleno de desafíos y dificultades, estamos dedicados a ayudar a las personas a encontrar paz y sanación en sus vidas.  </p>
              <p class="lead">
                Nos esforzamos por ser un puente de amor y comprensión, ayudando a las personas a reconciliarse con Dios, con sus seres queridos y consigo mismas.
                Creemos que la reconciliación es el primer paso hacia una vida llena de propósito y alegría.  </p>

            </div>
            <div class="col-md-3">
              <img src={imageMap.versiculo1} alt="Icono" height={300} width={300} />
            </div>
          </div>
          <hr class="featurette-divider"></hr>

          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading fw-normal lh-1">Nuestra Comunidad</h2>
              <p class="lead">En nuestra iglesia, todos son bienvenidos. Nos esforzamos por ser una comunidad inclusiva y amorosa, donde cada persona se sienta valorada y apoyada. Creemos que todos tienen un lugar en la familia de Dios y estamos aquí para caminar juntos en este viaje de fe.</p>
              <p class="lead">

                Nuestro objetivo es ver vidas restauradas a través del poder del Espíritu Santo. Ofrecemos apoyo, oración y compañerismo para ayudar a cada individuo
                a superar sus heridas y encontrar una nueva esperanza en Cristo.
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              <img src={imageMap.versiculo1} alt="Icono" height={300} width={300} />
            </div>
          </div>

          {/* <hr class="featurette-divider"></hr> */}

          <div class="container my-5">
            <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
              <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 class="display-4 fw-bold lh-1 text-body-emphasis">Pastores</h1>
                <p class="card-text mb-auto py-5">En nuestra iglesia creemos que cada persona es
                  valiosa y tiene un propósito especial. Nos encantaría que nos visitaras,
                  sin compromiso, para que puedas experimentar un ambiente de amor, paz y
                  esperanza. Aquí encontrarás un lugar donde serás bienvenido tal como
                  eres, sin importar de dónde vengas o cuál sea tu historia. Sabemos que
                  dar el primer paso puede no ser fácil, pero queremos asegurarte que en
                  nuestra comunidad encontrarás un espacio donde puedes sentirte en casa,
                  rodeado de personas que desean lo mejor para ti y están dispuestas a
                  caminar contigo en esta hermosa jornada de fe y vida. Si no puedes
                  visitarnos ahora, pero quieres saber más sobre nosotros, no dudes en
                  dejarnos tu correo electrónico. Estaremos encantados de enviarte
                  información sobre nuestras reuniones, actividades especiales, y mensajes
                  que inspiran y transforman vidas. No estás solo. ¡Tu lugar está aquí y
                  te estamos esperando! 💌</p>                <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">

                </div>
              </div>
              <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                <img src={imageMap.pastores} alt="Icono" height={500} width={400} />
              </div>
            </div>
          </div>


        </div>
      </main>
      <Footer />  {/* Incluye el Navbar en el layout general */}
    </Router>
  );
}

export default App;
