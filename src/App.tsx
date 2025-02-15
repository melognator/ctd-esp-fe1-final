import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import PaginaInicio from "./paginas/Inicio.pagina";
import PaginaFavoritos from "./paginas/Favoritos.pagina";
import PaginaDetalle from "./paginas/Detalle.pagina";
import Encabezado from "./componentes/layout/encabezado.componente";
import { fetchFavoritos, fetchPersonajesFavoritos } from './store/favoritosReducer';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { fetchEpisodios } from './store/detalleReducer';

function App() {

    const dispatch = useAppDispatch()
    const detalle = useAppSelector(state => state.detalle)
    const favoritos = useAppSelector(state => state.favoritos)
    
    useEffect(() => {
        dispatch(fetchFavoritos())
    }, [])

    useEffect(() => {
        dispatch(fetchPersonajesFavoritos())
    }, [favoritos.listado])

    useEffect(() => {
        if (detalle.personaje.id != -1) {
            dispatch(fetchEpisodios())
        }
    }, [detalle.personaje])

    return (
        <div className="App">
            <Encabezado />
            <Routes>
                <Route path="/" element={<PaginaInicio />} />
                <Route path="favoritos" element={<PaginaFavoritos />} />
                <Route path="detalle" element={<PaginaDetalle />} />
            </Routes>
        </div>
    );
}

export default App;
