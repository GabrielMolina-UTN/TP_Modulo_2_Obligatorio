/* TP obligatorio Modulo 2

Nota: Se utilizo una API falsa para la obtencion de los datos, los datos se almacenaron en un archivo 
JSON en el repositorio de github */

import React, { useState, useEffect } from "react";
import { DetalleProducto } from "./Components/DetalleProducto";

function App() {
  const [zapatillas, setZapatillas] = useState([]);
  const [zapatos, setZapatos] = useState([]);

  // Obtueniendo los datos de las zapatillas
  const fetchZapatillasData = () => {
    return fetch('https://my-json-server.typicode.com/GabrielMolina-UTN/API-FalsaModulo2/zapatillas')
      .then(response => response.json())
      .then(data => setZapatillas(data))
      .catch(error => console.error('Error:', error));
  };

  // Obteniendo los datos de los zxapatos
  const fetchZapatosData = () => {
    return fetch('https://my-json-server.typicode.com/GabrielMolina-UTN/API-FalsaModulo2/zapatos')
      .then(response => response.json())
      .then(data => setZapatos(data))
      .catch(error => console.error('Error:', error));
  };

  // aplicamos useEffect de funciones de obtencion de datos
  useEffect(() => {
    fetchZapatillasData();
    fetchZapatosData();
  }, []);

  return (
    <>
      <DetalleProducto zapatillas={zapatillas} zapatos={zapatos} />
    </>
  );
}

export default App;
