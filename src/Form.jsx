import { useState } from 'react';
import Card from './Card';

function Form() {
    const [data, setData] = useState({
            nombre: "",
            libroFavorito: "",
            correo: ""
        }
    );
    const [error, setError] = useState(false);
    const [mostrar, setMostar] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (
            data.nombre.trim().length >= 3 && 
            data.libroFavorito.length >= 6 &&
            regexEmail.test(data.correo)
        ) {
            setMostar(true);
            setError(false);
        } else {
            setMostar(false);
            setError(true);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="formulario">
                <input
                    type="text"
                    placeholder="Ingresa tu nombre completo: "
                    value={data.nombre}
                    onChange={(event) => setData({...data, nombre: event.target.value})}
                />
                <input
                    type="text"
                    placeholder="Ingresa tu libro favorito"
                    value={data.libroFavorito}
                    onChange={(event) => setData({...data, libroFavorito: event.target.value})}
                />
                <input
                    type="email"
                    placeholder="Ingresa tu email"
                    value={data.correo}
                    onChange={(event) => setData({...data, correo: event.target.value})}
                />
                <button type="submit">Enviar</button>
            </form>
            {error && <p className="error-message">Por favor chequea que la información sea correcta</p>}
            {mostrar && <Card data={data} />}
        </div>
    );
}

export default Form;
