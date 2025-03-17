import React from "react";
const images = require.context('../assets/iconos', false, /\.(png|jpe?g|svg)$/);

// Obtener todas las imágenes y mapearlas en un objeto
const imageMap = images.keys().reduce((map, imagePath) => {
  const name = imagePath.replace('./', '').replace(/\.(png|jpe?g|svg)$/, '');
  map[name] = images(imagePath);
  return map;
}, {});

const ministerios = () => {
  return (
    <div className="container">
      <div className="px-4 py-2 my-5 text-center animated-div">
        <img src={imageMap.pajaro} alt="Versículo" height={100} width={100} />

        <h1 className="display-4 fst-italic titulo">Ministerios</h1>
      </div>
      <div className="container-per " id="custom-cards">

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 ">
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img src={imageMap.pajaro} alt="Versículo" height={50} width={50} />

                  </li>
                  <li className="d-flex align-items-center me-3">

                    <small>Earth</small>
                  </li>
                  <li className="d-flex align-items-center">

                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img src={imageMap.pajaro} alt="Versículo" height={50} width={50} />

                  </li>
                  <li className="d-flex align-items-center me-3">

                    <small>Earth</small>
                  </li>
                  <li className="d-flex align-items-center">

                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img src={imageMap.pajaro} alt="Versículo" height={50} width={50} />

                  </li>
                  <li className="d-flex align-items-center me-3">

                    <small>California</small>
                  </li>
                  <li className="d-flex align-items-center">

                    <small>5d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img src={imageMap.pajaro} alt="Versículo" height={50} width={50} />

                  </li>
                  <li className="d-flex align-items-center me-3">

                    <small>California</small>
                  </li>
                  <li className="d-flex align-items-center">

                    <small>5d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img src={imageMap.pajaro} alt="Versículo" height={50} width={50} />

                  </li>
                  <li className="d-flex align-items-center me-3">

                    <small>California</small>
                  </li>
                  <li className="d-flex align-items-center">

                    <small>5d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img src={imageMap.pajaro} alt="Versículo" height={50} width={50} />

                  </li>
                  <li className="d-flex align-items-center me-3">

                    <small>California</small>
                  </li>
                  <li className="d-flex align-items-center">

                    <small>5d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ministerios;
