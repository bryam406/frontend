import React from "react";

const images = require.context('../assets/inicio', false, /\.(png|jpe?g|svg|webp)$/);

// Obtener todas las imágenes y mapearlas en un objeto
const imageMap = images.keys().reduce((map, imagePath) => {
  const name = imagePath.replace('./', '').replace(/\.(png|jpe?g|svg|webp)$/, '');
  map[name] = images(imagePath);
  return map;
}, {});


const Donaciones = () => {
  return (
    <div className="container">
      <section
        className="bg-primary text-white text-center py-4"
        style={{ backgroundColor: 'rgb(151, 211, 142)' }}
      >
        <p className="lead">Con tu ayuda, hacemos la diferencia</p>
      </section>



      <div class="container-per" id="featured-3" style={{ marginTop: ' 5%' }}>
        <h2 class="pb-2 border-bottom">¿Por qué donar?</h2>

        <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">

          <div class="feature col">

            <p>
              Tu donación nos ayuda a llevar a cabo proyectos que impactan vidas.
              Con tu apoyo, podemos continuar ayudando a quienes más lo necesitan.
            </p>
            <ul>
              <li>Financia programas sociales</li>
              <li>Apoya la educación y el desarrollo</li>
              <li>Contribuye a causas de impacto positivo</li>
            </ul>
          </div>
          <div className="feature col text-center">
            <img
              src={imageMap.donacion}
              alt="Versículo"
              height={'auto'}
              width={'50%'}
            />
          </div>


        </div>
      </div>
      <div className="container-per text-center">
        <h2 className="mb-4 py-3">¿Cómo donar?</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-2 bg-light">
          <div className="feature col">
            <h3>Donar con Bizum</h3>
            <img
              src="qr-bizum.png"
              alt="QR Bizum"
              className="img-fluid mb-2"
              style={{ width: '200px' }}
            />
            <p>Escanea el código QR o envía tu donación al número:</p>
            <p><strong>+34 666 666 66</strong></p>
          </div>

          <div className="feature col">
            <h3>Transferencia Bancaria</h3>
            <img
              src="qr-transferencia.png"
              alt="QR Transferencia"
              className="img-fluid mb-2"
              style={{ width: '200px' }}
            />
            <p>Realiza tu transferencia a:</p>
            <p><strong>IBAN: ES12 1234 5678 9012 3456</strong></p>
            <p>Concepto: Donación Proyecto</p>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Donaciones;
