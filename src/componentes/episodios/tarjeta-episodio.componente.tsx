import './tarjeta-episodio.css';

interface TarjetaEpisodioProps {
    episodio: Episodio;
}

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaEpisodio = ({ episodio }: TarjetaEpisodioProps) => {
    return <div className="tarjeta-episodio">
        <div>
            <h4>{episodio.titulo}</h4>
            <span>({episodio.episodio})</span>
        </div>
        <span>Lanzado el: {episodio.fecha}</span>
    </div>
}

export default TarjetaEpisodio;