import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getPersonajes, getPersonajesByFilter, getPersonajesByPage } from '../api/personajesApi'
import { RootState } from './store'

export interface PersonajesState {
    isLoading: boolean,
    next: string | null,
    prev: string | null,
    personajes: Array<Personaje>,
    filtro?: string,
}

const initialState: PersonajesState = {
    isLoading: true,
    next: null,
    prev: null,
    personajes: [],
    filtro: '',
}

export const fetchFilterPersonajes = createAsyncThunk(
    'personajes/fetchFilterPersonajes',
    async (filter: string) => {
        const response = await getPersonajesByFilter(filter)
        return response
    }
)

export const fetchPersonajes = createAsyncThunk(
    'personajes/fetchPersonajes',
    async () => {
        const response = await getPersonajes()
        return response
    }
)

export const fetchPrevPersonajes = createAsyncThunk(
    'personajes/fetchPrevPersonajes',
    async (_, { getState }) => {
        const state = getState() as RootState
        const { prev } = state.personajes
        if (prev === null) {
            throw new Error("No hay más personajes")
        }
        const response = await getPersonajesByPage(prev)
        return response
    }
)

export const fetchNextPersonajes = createAsyncThunk(
    'personajes/fetchNextPersonajes',
    async (_, { getState }) => {
        const state = getState() as RootState
        const { next } = state.personajes
        if (next === null) {
            throw new Error("No hay más personajes")
        }
        const response = await getPersonajesByPage(next)
        return response
    }
)

const personajesSlice = createSlice({
    name: 'favoritos',
    initialState,
    reducers: {
        setFiltro(state, action: PayloadAction<string>) {
            state.filtro = action.payload
        },
        resetFiltro(state) {
            state.filtro = ''
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPersonajes.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchPersonajes.fulfilled, (state, action) => {
                state.isLoading = false
                state.prev = action.payload.prev
                state.next = action.payload.next
                state.personajes = action.payload.personajes
            })
            .addCase(fetchNextPersonajes.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchNextPersonajes.fulfilled, (state, action) => {
                state.isLoading = false
                state.prev = action.payload.prev
                state.next = action.payload.next
                state.personajes = action.payload.personajes
            })
            .addCase(fetchPrevPersonajes.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchPrevPersonajes.fulfilled, (state, action) => {
                state.isLoading = false
                state.prev = action.payload.prev
                state.next = action.payload.next
                state.personajes = action.payload.personajes
            })
            .addCase(fetchFilterPersonajes.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchFilterPersonajes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.prev = action.payload.prev
                state.next = action.payload.next
                state.personajes = action.payload.personajes
            })
            .addCase(fetchFilterPersonajes.rejected, (state, action) => {
                state.isLoading = false;
                state.prev = null
                state.next = null
                state.personajes = []
            })
    },
})

export const { setFiltro, resetFiltro } = personajesSlice.actions
export default personajesSlice.reducer