import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchToggleFavorito } from "../store/favoritosReducer";
import { Link } from "react-router-dom";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * 
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */
const PaginaDetalle = () => {

    const { personaje, episodios, isLoading } = useAppSelector(state => state.detalle)
    const favoritos = useAppSelector(state => state.favoritos)
    const dispatch = useAppDispatch()

    console.log(episodios)

    if (personaje.id === -1) return <div className="container">
        <h3>Seleccione un personaje para ver sus datos</h3>
        <Link to={'/'}>Ver listado</Link>
    </div>
    return <div className="container">
        <h3>{personaje.nombre}</h3>
        <div className={"detalle"}>
            <div className={"detalle-header"}>
                <img src={personaje.imagen} alt={personaje.nombre} />
                <div className={"detalle-header-texto"}>
                    <p>{personaje.nombre}</p>
                    <p>Planeta: {personaje.planeta}</p>
                    <p>Genero: {personaje.genero}</p>
                </div>
                <BotonFavorito onClick={() => dispatch(fetchToggleFavorito(personaje.id))} esFavorito={favoritos.listado.includes(personaje.id)} />
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
            {isLoading ? <p>Cargando...</p> :
                episodios.map(episodio => <TarjetaEpisodio key={episodio.id} episodio={episodio} />)
            }
        </div>
    </div>
}

export default PaginaDetalle