import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Cargando from "../componentes/cargando/cargando.componente";
import { resetFiltro } from "../store/personajesReducer";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {

    const { personajes, isLoading } = useAppSelector(state => state.personajes)
    const dispatch = useAppDispatch()

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button onClick={() => dispatch(resetFiltro())} className="danger">Limpiar filtros</button>
        </div>
        <Filtros />
        <Paginacion />
        <div className="grilla-contenedor">
            {isLoading && personajes.length > 0 && (<Cargando />)}
            <GrillaPersonajes personajes={personajes} />
        </div>
        <Paginacion />
    </div>
}

export default PaginaInicio