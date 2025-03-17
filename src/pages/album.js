import React from 'react';
import Slider from '../components/album/slider';

const images = require.context('../assets/album', false, /\.(png|jpe?g|svg)$/);

// Obtener todas las imágenes y mapearlas en un objeto
const imageMap = images.keys().reduce((map, imagePath) => {
  const name = imagePath.replace('./', '').replace(/\.(png|jpe?g|svg)$/, '');
  map[name] = images(imagePath);
  return map;
}, {});

console.log("Imágenes cargadas:", imageMap); // Depuración

function Album() {
  return (
    <main>
      <Slider />
      <div className="container">
        <div className="row mb-2">
          <h2 className="display-4 fst-italic titulo">Nuestras ceremonias</h2>
        </div>
        <div className="row">
          {Object.keys(imageMap).slice(0, 4).map((key, index) => (
            <div key={index} className="col-md-3 col-sm-6 col-xs-12">
              <div className="card">
                <div className="cover item-a">
                  <img
                    src={imageMap[key]}
                    alt={`Ceremonia ${index + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    className="gradient-overlay"
                  />
                  <div className="card-back">
                    <a href="#">Add to cart</a>
                    <a href="#">View detail</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Album;
