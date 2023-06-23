import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';

interface GrillaPersonajesProps {
    personajes: Array<Personaje>;
}

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = ({ personajes }: GrillaPersonajesProps) => {
    return <div className="grilla-personajes">
        { personajes.map((personaje) => (
            <TarjetaPersonaje key={personaje.id} personaje={personaje} />
        )) }
    </div>
}

export default GrillaPersonajes;