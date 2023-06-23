import { fetchToggleFavorito } from '../../store/favoritosReducer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';

interface TarjetaPersonajeProps {
    personaje: Personaje;
}

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = ({ personaje }: TarjetaPersonajeProps) => {

    const dispatch = useAppDispatch()
    const favoritosState = useAppSelector(state => state.favoritos)

    const onClickFavorito = () => {
        dispatch(fetchToggleFavorito(personaje.id))
    }

    const esFavorito = favoritosState.listado.includes(personaje.id)

    return <div className="tarjeta-personaje">
        <img src={personaje.imagen} alt={personaje.nombre}/>
        <div className="tarjeta-personaje-body">
            <span>{personaje.nombre}</span>
            <BotonFavorito onClick={onClickFavorito} esFavorito={esFavorito} />
        </div>
    </div>
}

export default TarjetaPersonaje;