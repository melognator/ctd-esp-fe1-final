import { configureStore } from "@reduxjs/toolkit";
import favoritosReducer from "./favoritosReducer";
import personajesReducer from "./personajesReducer";
import detalleReducer from "./detalleReducer";

const store = configureStore({
    reducer: {
        personajes: personajesReducer,
        favoritos: favoritosReducer,
        detalle: detalleReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;