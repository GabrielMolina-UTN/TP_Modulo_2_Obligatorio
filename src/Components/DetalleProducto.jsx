import React, { useState, Fragment} from 'react';
import "../Styles/DetalleProducto.css";
import logo from "../assets/logo.webp";

import { BotonMostrar } from './BotonMostrar';
import { BotonSalir } from './BotonSalir';
import { BotonComprar } from './BotonComprar';
import { BotonAgregarAlCarrito } from './BotonAgregarAlCarrito';


import { SeccionDetalle } from './SeccionDetalle';

//obtenemos los datos de los productos a traves de las props desde la aplicacion padre
export const DetalleProducto = ({ zapatillas, zapatos }) => {

  //Manipulacion de los estados de visibilidad para los elementos (en este caso botones y tabla con los datos de los productos...:) )

  const [mostrarProductos, setMostrarProductos] = useState(false); //estado interno de la tabla mostrar producto..
  const [botonMostrar, setBotonMostrar] = useState(true); //estado interno del boton MOSTRAR
  const [botonSalir, setBotonSalir] = useState(false); //Estado interno del boton SALIR 
  const [botonComprar, setBotonComprar] = useState(false); //Estado interno del boton COMPRAR
  const [botonAgregarCarrito, setBotonAgregarCarrito] = useState(false)

  //manejando la visibilidad de los elementos
  const mostrarOcultarProductos = () => {
    setMostrarProductos(!mostrarProductos);
    setBotonMostrar(false);
    setBotonSalir(true);
    setBotonComprar(!botonComprar)
  };

  //fcion. salir para el boton salir
  const salir = () => {
    setMostrarProductos(false);
    setBotonMostrar(true) //esta en true
    setBotonSalir(false);  //se oculta el BTN SALIR false
    setBotonComprar(false); //Se oculta el btn COMPRAR false
  };

  //fcion. para comprar el producto
  const comprar = () =>{
    setMostrarProductos(true);
    setBotonSalir(false);
    setBotonComprar(false);
    setBotonAgregarCarrito(true);
  };

  //Fcion. agregar al carrito de compras
  const agregarCarrito = () =>{
    setMostrarProductos(false);
    setBotonMostrar(false);
    setBotonComprar(false);
    setBotonSalir(false);
    setBotonAgregarCarrito(false);
  };

  return (
    <Fragment>
      <div className='container-fluid'>
        <header className='row justify-content-center'>
          <div className='col-12'>
            <img src={logo} alt="Logo de la empresa King Shop" />
          </div>
          <h1>Detalle de productos</h1>
        </header>

        <div className='row justify-content-center mt-5'>
          <div className='col-lg-4'>
            <div className="d-grid gap-2 col-6 mx-auto">
           
                <BotonMostrar  mostrarOcultarProductos={mostrarOcultarProductos} visible = {botonMostrar}/>  {/*Paso la fcion. a BotonMostrar.jsx */}
             
            </div>

            {mostrarProductos && (
              <>
                <SeccionDetalle mostrar={mostrarProductos} productos={zapatillas} tipo="Zapatillas" />
                <SeccionDetalle mostrar={mostrarProductos} productos={zapatos} tipo="Zapatos" />
              </>
            )}

            <div className="d-grid gap-2 col-6 mx-auto mt-5">
              <BotonSalir salir = {salir} visible = {botonSalir} />
              <BotonComprar comprar = {comprar} visible = {botonComprar}/>
              
              <section>

                <BotonAgregarAlCarrito agregarCarrito = {agregarCarrito} visible = {botonAgregarCarrito}/>
               
              </section>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
