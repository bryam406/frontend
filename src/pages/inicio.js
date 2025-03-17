import React from 'react';
import Slider from '../components/inicio/slider';

const images = require.context('../assets/inicio', false, /\.(png|jpe?g|svg)$/);

// Obtener todas las imágenes y mapearlas en un objeto
const imageMap = images.keys().reduce((map, imagePath) => {
    const name = imagePath.replace('./', '').replace(/\.(png|jpe?g|svg)$/, '');
    map[name] = images(imagePath);
    return map;
}, {});

console.log("Imagenes cargadas:", imageMap); // Depuración

function Inicio() {
    return (
        <main>
            <Slider />
            <div className="container marketing">
                <div className="row featurette">
                    <div className="col-md-9">
                        <h2 className="featurette-heading fw-normal lh-1 titulo">Reconciliación y Restauración</h2>
                        <p className="lead">
                            Creemos firmemente en el poder transformador de la reconciliación y la restauración...
                        </p>
                    </div>
                    <div className="col-md-3">
                        <img src={imageMap.versiculo1} alt="Versículo" height={300} width={300} />
                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading fw-normal lh-1 titulo">Nuestra Comunidad</h2>
                        <p className="lead">
                            En nuestra iglesia, todos son bienvenidos...
                        </p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src={imageMap.versiculo1} alt="Versículo" height={300} width={300} />
                    </div>
                </div>
                <div className="container my-5">
                    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                            <h1 className="display-4 fw-bold lh-1 text-body-emphasis titulo">Pastores</h1>
                            <p className="card-text mb-auto py-5">
                                En nuestra iglesia creemos que cada persona es valiosa...
                            </p>
                        </div>
                        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                            <img src={imageMap.pastores} alt="Pastores" height={500} width={400} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Inicio;
