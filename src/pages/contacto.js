import React from "react";

const Contacto = () => {
  return (
    <div className="container">
      <div className="container-per">
        <div className="row mb-2">
          <h2 className="display-4 fst-italic titulo text-center">
            ¡Te esperamos con los brazos abiertos!
          </h2>
          <p className="lead text-center">
            En nuestra iglesia creemos que cada persona es valiosa y tiene un propósito especial. Nos encantaría que nos
            visitaras, sin compromiso, para que puedas experimentar un ambiente de amor, paz y esperanza. Aquí
            encontrarás un lugar donde serás bienvenido tal como eres, sin importar de dónde vengas o cuál sea tu
            historia.
            <br />
            Sabemos que dar el primer paso puede no ser fácil, pero queremos asegurarte que en nuestra comunidad
            encontrarás un espacio donde puedes sentirte en casa, rodeado de personas que desean lo mejor para ti y
            están dispuestas a caminar contigo en esta hermosa jornada de fe y vida.
            <br />
            Si no puedes visitarnos ahora, pero quieres saber más sobre nosotros, no dudes en dejarnos tu correo
            electrónico. Estaremos encantados de enviarte información sobre nuestras reuniones, actividades especiales,
            y mensajes que inspiran y transforman vidas.
            <br />
            No estás solo. ¡Tu lugar está aquí y te estamos esperando! 💌
          </p>
        </div>
      </div>

      <div className="container-per">
        <div id="Contacto" className="row g-5">
          <h1 style={{ textAlign: "center" }} className="display-4 fst-italic titulo">
            Contacto
          </h1>
          <div className="col-xl-6">
            <div className="row row-cols-md-2 g-4">
              <div className="aos-item" data-aos="fade-up" data-aos-delay="200">
                <div className="aos-item__inner">
                  <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
                    <div className="d-flex justify-content-start">
                      <i className="fa-solid fa-envelope h3 pe-2"></i>
                      <span className="h5">Correo</span>
                    </div>
                    <span>yosoyiglesia@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="aos-item" data-aos="fade-up" data-aos-delay="400">
                <div className="aos-item__inner">
                  <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
                    <div className="d-flex justify-content-start">
                      <i className="fa-solid fa-phone h3 pe-2"></i>
                      <span className="h5">Teléfono</span>
                    </div>
                    <span>+34 654565546, +34 654565546</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="aos-item mt-4" data-aos="fade-up" data-aos-delay="600">
              <div className="aos-item__inner">
                <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
                  <div className="d-flex justify-content-start">
                    <i className="fa-solid fa-location-pin h3 pe-2"></i>
                    <span className="h5">Localización</span>
                  </div>
                  <span>C. de Tucán, 1, Carabanchel, 28025 Madrid</span>
                </div>
              </div>
            </div>
            <div className="aos-item" data-aos="fade-up" data-aos-delay="800">
              <div className="mt-4 w-100 aos-item__inner">
                <iframe
                  className="hvr-shadow"
                  width="100%"
                  height="405"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=C.%20de%20Tucán,%201,%20Carabanchel,%2028025%20Madrid&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="bg-light col-xl-6">
            <h2 className="pb-4 text-center">Envíanos un mensaje</h2>
            <form>
              <div className="row g-4">
                <div className="col-6 mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Nombre
                  </label>
                  <input type="text" className="form-control" id="nombre" name="nombre" placeholder="John" required />
                </div>
                <div className="col-6 mb-3">
                  <label htmlFor="apellidos" className="form-label">
                    Apellidos
                  </label>
                  <input type="text" className="form-control" id="apellidos" name="apellidos" placeholder="Doe" required />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo electrónico
                </label>
                <input type="email" className="form-control" id="correo" name="correo" placeholder="nombre@ejemplo.com" required />
              </div>
              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">
                  Teléfono
                </label>
                <input type="tel" className="form-control" id="telefono" name="telefono" placeholder="+34 654565546" />
              </div>
              <div className="mb-3">
                <label htmlFor="pais" className="form-label">
                  País
                </label>
                <select className="form-select" id="pais" name="pais">
                  <option value="España">España</option>
                  <option value="Fuera de España">Fuera de España</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">
                  Texto
                </label>
                <textarea className="form-control" id="mensaje" name="mensaje" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-dark">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
