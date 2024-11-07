import React from 'react';

function Card({ data }) {
  return (
    <div className="card">
      <h2>Hola: {data.nombre}</h2>
      <p>Tu libro favorito es: {data.libroFavorito}</p>
    </div>
  );
}

export default Card;