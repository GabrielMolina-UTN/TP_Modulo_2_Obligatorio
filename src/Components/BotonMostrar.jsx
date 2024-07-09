import React from 'react'

export const BotonMostrar = ( {mostrarOcultarProductos, visible} ) => {

    //Paso como props la fcion mostrarOcultarProductos() y el estado de visibilidad "visible" del boton mostrar q esta en true (se esta mostrando) 

    //Luego, si visible (se esta mostrando true) entonces se dispara el evento click con la fcion
  return (

    <>
        { visible && 
                    <button className="btn btn-primary" type="button" onClick={mostrarOcultarProductos}>
                                Mostrar productos
                    </button> 
                
        } 
    
    </>
         
  )
}
