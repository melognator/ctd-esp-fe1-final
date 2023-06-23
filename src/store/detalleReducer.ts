import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { getEpisodiosByArray } from "../api/personajesApi";

interface DetalleState {
    personaje: Personaje,
    isLoading: boolean,
    episodios: Array<Episodio>,
}

const initialState: DetalleState = {
    personaje: {
        id: -1,
        nombre: "",
        url: "",
        imagen: "",
        planeta: "",
        genero: "",
        episodios: [],
    },
    isLoading: true,
    episodios: [],
}

export const fetchEpisodios = createAsyncThunk(
    'favoritos/fetchEpisodios',
    async (_, { getState }) => {
        const state = getState() as RootState
        const { personaje } = state.detalle
        if (personaje.episodios === undefined) {
            return []
        }
        const arrayEpisodiosId = personaje.episodios.map((episodio) => {
            const arrayUrl = episodio.split("/")
            const id = arrayUrl[arrayUrl.length - 1]
            return Number(id)
        })
        const response = getEpisodiosByArray(arrayEpisodiosId)
        return response
    }
)

const detalleSlice = createSlice({
    name: 'detalle',
    initialState,
    reducers: {
        setDetalle: (state, action) => {
            state.personaje = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEpisodios.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchEpisodios.fulfilled, (state, action) => {
                state.isLoading = false
                state.episodios = action.payload
            })
    },
})

export const { setDetalle } = detalleSlice.actions
export default detalleSlice.reducer