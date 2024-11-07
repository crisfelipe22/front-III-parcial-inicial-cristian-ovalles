function Card({ data }) {
  return (
    <div className="card">
      <h2>Hola: {data.nombre}</h2>
      <p>Te enviamos a tu correo <strong>{data.correo}</strong> </p>
      <p>Tu libro favorito <strong>{data.libroFavorito}</strong></p> 
    </div>
  );
}

export default Card;