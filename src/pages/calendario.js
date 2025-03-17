import React, { useEffect, useState } from "react";

// Importar las imágenes
const images = require.context('../assets/calendario', false, /\.(png|jpe?g|svg)$/);

// Obtener todas las imágenes y mapearlas en un objeto
const imageMap = images.keys().reduce((map, imagePath) => {
  const name = imagePath.replace('./', '').replace(/\.(png|jpe?g|svg)$/, '');
  map[name] = images(imagePath);
  return map;
}, {});

const Calendario = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    generateCalendar(currentDate.getMonth(), currentDate.getFullYear());
  }, [currentDate]);

  const generateCalendar = (month, year) => {
    const calendarBody = document.getElementById("calendar-body");
    const title = document.getElementById("calendar-title");

    const monthNames = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    title.textContent = `${monthNames[month]} ${year}`;
    calendarBody.innerHTML = "";

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let row = document.createElement("tr");

    for (let i = 0; i < firstDay; i++) {
      row.appendChild(document.createElement("td"));
    }

    for (let day = 1; day <= daysInMonth; day++) {
      let cell = document.createElement("td");
      cell.textContent = day;

      const dayOfWeek = new Date(year, month, day).getDay();

      if (dayOfWeek === 0) {  // Domingo
        cell.classList.add("bg-danger-subtle", "fw-bold", "text-danger");
      } else if (dayOfWeek === 4) {  // Jueves
        cell.classList.add("bg-primary-subtle", "fw-bold", "text-primary");
      }

      row.appendChild(cell);

      if ((firstDay + day) % 7 === 0) {
        calendarBody.appendChild(row);
        row = document.createElement("tr");
      }
    }

    if (row.children.length > 0) {
      calendarBody.appendChild(row);
    }
  };

  const prevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const nextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  return (
    <div className="fondo">
      <div className="container-calendar">
        <div className="text-left text-dark">
          <h1 className="display-4 fst-italic titulo">Iglesia Evangelica</h1>
          <p>Bienvenidos al calendario de eventos de nuestra iglesia. Aquí encontrarás todas las actividades y reuniones que nos ayudan a crecer juntos en fe y comunidad. ¡Esperamos verte pronto!</p>
        </div>
        <div className="text-right">
          <img src={imageMap.fondoCalendar} alt="Fondo Calendario" height={300} width={300} />
        </div>
      </div>

      <div className="container-calendar2">
        <div className="text-center">
        </div>
        <div className="container px-4 py-5">
          <h2 className="pb-2 border-bottom text-center">
            <h1 className="display-4 fst-italic titulo">
              Calendario y Eventos:
            </h1>
          </h2>

          <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
            <div className="col d-flex flex-column align-items-start gap-2">
              <div className="container mt-4">
                <h2 className="text-center" id="calendar-title"></h2>
                <table className="table table-bordered text-center">
                  <thead className="table-dark">
                    <tr>
                      <th className="text-danger">Dom</th>
                      <th>Lun</th>
                      <th>Mar</th>
                      <th>Mié</th>
                      <th className="text-primary">Jue</th>
                      <th>Vie</th>
                      <th>Sáb</th>
                    </tr>
                  </thead>
                  <tbody id="calendar-body"></tbody>
                </table>
                <div className="d-flex justify-content-center mb-3">
                  <button className="btn btn-primary me-2" onClick={prevMonth}>← Anterior</button>
                  <button className="btn btn-primary" onClick={nextMonth}>Siguiente →</button>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="row row-cols-1 row-cols-sm-2 g-4">
                {/* Aquí podrías agregar más tarjetas o elementos */}
                <div class="col d-flex flex-column gap-2">
                  <div
                    class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                  </div>
                  <h4 class="fw-semibold mb-0 text-body-emphasis">Featured title</h4>
                  <p class="text-body-secondary">Paragraph of text beneath the heading to explain the heading.
                  </p>
                </div>

                <div class="col d-flex flex-column gap-2">
                  <div
                    class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">

                  </div>
                  <h4 class="fw-semibold mb-0 text-body-emphasis">Featured title</h4>
                  <p class="text-body-secondary">Paragraph of text beneath the heading to explain the heading.
                  </p>
                </div>

                <div class="col d-flex flex-column gap-2">
                  <div
                    class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">

                  </div>
                  <h4 class="fw-semibold mb-0 text-body-emphasis">Featured title</h4>
                  <p class="text-body-secondary">Paragraph of text beneath the heading to explain the heading.
                  </p>
                </div>

                <div class="col d-flex flex-column gap-2">
                  <div
                    class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">

                  </div>
                  <h4 class="fw-semibold mb-0 text-body-emphasis">Featured title</h4>
                  <p class="text-body-secondary">Paragraph of text beneath the heading to explain the heading.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendario;
