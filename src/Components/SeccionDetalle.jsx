import React from 'react';
//seccion con las tablas donde se detallan los productos...
export const SeccionDetalle = ({ mostrar, productos, tipo }) => {
  return (
    <>
      {mostrar && (
        <section className='productos-container'>
          <table className="table border-primary caption-top">
            <caption>Detalle de {tipo}</caption>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Marca</th>
                <th scope="col">Estilo</th>
                <th scope="col">Precio</th>
                <th scope="col">Descripción</th>
              </tr>
            </thead>
            <tbody>
              {productos && productos.map((producto) => (
                <tr key={producto.id}>
                  <th scope="row">{producto.id}</th>
                  <td>{producto.marca}</td>
                  <td>{producto.estilo}</td>
                  <td>${producto.precio}</td>
                  <td>{producto.descripcion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </>
  );
};

