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
                            Creemos
                            firmemente en el
                            poder transformador de la reconciliación y la
                            restauración. Nuestro lema no es solo una frase, sino un llamado a la acción. En
                            un
                            mundo lleno de desafíos y dificultades, estamos dedicados a ayudar a las
                            personas a
                            encontrar paz y sanación en sus vidas.                        </p>
                        <p class="lead">Nos esforzamos por ser un puente de amor y comprensión, ayudando a las
                            personas
                            a reconciliarse con Dios, con sus seres queridos y consigo mismas. Creemos que
                            la
                            reconciliación es el primer paso hacia una vida llena de propósito y alegría.
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
                        <p class="lead">
                            En nuestra iglesia, todos son bienvenidos. Nos esforzamos por ser una comunidad
                            inclusiva y
                            amorosa,
                            donde cada persona se sienta valorada y apoyada. Creemos que todos tienen un
                            lugar en la
                            familia de Dios y estamos aquí para caminar juntos en este viaje de fe.


                        </p>
                        <p className="lead">
                            Nuestro objetivo es ver vidas restauradas a través del poder del
                            Espíritu Santo.
                            Ofrecemos apoyo, oración y compañerismo para ayudar a cada individuo a superar
                            sus
                            heridas y encontrar una nueva esperanza en Cristo.                        </p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src={imageMap.versiculo1} alt="Versículo" height={300} width={300} />
                    </div>
                </div>
                <div className="container my-5">
                    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                            <h1 className="display-2 lh-1  titulo">Pastores</h1>
                            <p className="card-text mb-auto py-5">
                                En nuestra iglesia creemos que cada persona es
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
                                te estamos esperando! 💌                            </p>
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
