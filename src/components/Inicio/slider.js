
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Importa el enrutador y las rutas
import React from 'react';


const images = require.context('../../assets/inicio', false, /\.(png|jpe?g|svg)$/);

// Obtenemos todas las imágenes y las convertimos en un objeto con el nombre de cada imagen
const imageMap = images.keys().reduce((map, imagePath) => {
    // Usamos el nombre del archivo (sin la carpeta y la extensión) como clave
    const name = imagePath.replace('./', '').replace(/\.(png|jpe?g|svg)$/, '');
    map[name] = images(imagePath); // Mapeamos el nombre a la ruta de la imagen
    return map;
}, {});





function slider() {
    return (

        <main>

            <div id="myCarousel" className="carousel slide mb-6 py-3 mb-4" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" className="active" aria-current="true" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active carousel-item">
                        <img src={imageMap.inicio1} alt="Icono" height={550} style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
                        <div className="container">
                            <div className="carousel-caption" >
                                <div className='cuadro'>
                                    <h1 className='titulo'>GENESIS</h1>
                                    <p className="opacity-75">En el principio creó Dios los cielos y la tierra.</p>
                                    <p className="opacity-75">1.1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item carousel-item-next carousel-item">
                        <img src={imageMap.inicio2} alt="Icono" height={550} style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
                        <div className="container">
                            <div className="carousel-caption">
                                <div className='cuadro'>
                                    <h1 className='titulo'>SALMOS</h1>
                                    <p className="opacity-75">Alégrense los cielos, y gócese la tierra; Brame el mar y
                                        su plenitud. Regocíjese el campo, y todo lo que en él está;
                                        Entonces todos los árboles del bosque rebosarán de contento</p>
                                    <p className="opacity-75">96:11-12</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={imageMap.inicio3} alt="Icono" height={550} style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
                        <div className="container">
                            <div className="carousel-caption ">
                                <div className='cuadro'>
                                    <h1 className='titulo'>SALMOS</h1>
                                    <p className="opacity-75">Cuando veo tus cielos, obra de tus dedos, La luna y las estrellas que
                                        tú formaste.</p>
                                    <p className="opacity-75">8:3</p>
                                </div>
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

        </main>

    );
}

export default slider;
