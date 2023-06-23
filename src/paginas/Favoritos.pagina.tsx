import { useEffect } from "react";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchResetFavoritos } from "../store/favoritosReducer";
/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {

    const favoritos = useAppSelector(state => state.favoritos)
    const dispatch = useAppDispatch()

    return (
        <div className="container">
            <div className="actions">
                <h3>Personajes Favoritos</h3>
                <button onClick={() => dispatch(fetchResetFavoritos())} className="danger">Quitar todos</button>
            </div>
            <GrillaPersonajes personajes={favoritos.personajes} />
        </div>
    )
}

export default PaginaFavoritos