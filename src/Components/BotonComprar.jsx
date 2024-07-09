import React from 'react'

export const BotonComprar = ( {comprar, visible} ) => {
  return (
    <>
      {
        visible && <button className="btn btn-primary" type="button" onClick={comprar} >Comprar</button>
      }
        
    </>
  )
}
