import React from 'react'

export const BotonAgregarAlCarrito = ( {agregarCarrito, visible} ) => {
  return (
    <>
        {
            visible && <button className="btn btn-primary" type="button" onClick={agregarCarrito} >Agregar al carrito</button>
        }
    </>
  )
}
