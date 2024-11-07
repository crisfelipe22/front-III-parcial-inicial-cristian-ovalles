import React, { useState } from 'react';
import Card from './Card';

function Form() {
  const [nombre, setNombre] = useState("");
  const [libroFavorito, setLibroFavorito] = useState("");
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim().length >= 3 && libroFavorito.length >= 6) {
      setData({ nombre, libroFavorito });
      setError(false);
    } else {
      setError(true);
      setData(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="formulario">
        <input
          type="text"
          placeholder="Ingresa tu nombre completo: "
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingresa tu libro favorito"
          value={libroFavorito}
          onChange={(e) => setLibroFavorito(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <p className="error-message">Por favor chequea que la información sea correcta</p>}
      {data && <Card data={data} />}
    </div>
  );
}

export default Form;
