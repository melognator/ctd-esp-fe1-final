import { configureStore } from "@reduxjs/toolkit";
import favoritosReducer from "./favoritosReducer";
import personajesReducer from "./personajesReducer";

const store = configureStore({
    reducer: {
        personajes: personajesReducer,
        favoritos: favoritosReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;