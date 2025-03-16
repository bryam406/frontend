import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Importa el enrutador y las rutas
import React from 'react';

import Navbar from './components/Navbar'; // Importa el componente Navbar

function App() {
  return (
    <Router>
      <Navbar />  {/* Incluye el Navbar en el layout general */}

    </Router>
  );
}

export default App;
