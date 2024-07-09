import React from 'react'

export const BotonSalir = ( {salir, visible} ) => {
  return (
    <>
          {
            visible && <button className="btn btn-primary" type="button" onClick = {salir} >Salir</button>

          }  
    
    </>
  )
}
