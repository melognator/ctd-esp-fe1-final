import { PersonajesState } from "../store/personajesReducer"

/**
 * Mapea los personajes de la API a personajes de tipo Personaje
 */
const mapPersonajes = (personajesToMap: any) => {
    return personajesToMap.map((personaje: any) => ({
        id: personaje.id,
        nombre: personaje.name,
        url: personaje.url,
        imagen: personaje.image,
        planeta: personaje.location.name,
        episodios: personaje.episode,
        genero: personaje.gender,
    }))
}

/**
 * Obtiene los personajes de la API según la página
 */
export const getPersonajesByPage = async (url: string) => {
    const response = await fetch(url)
        .then((response) => response.json())
    const data: PersonajesState = {
        isLoading: false,
        next: response.info.next,
        prev: response.info.prev,
        personajes: mapPersonajes(response.results),
    }
    return data
}

/**
 * Obtiene los personajes de la API (primera página)
 */
export const getPersonajes = async () => {
    return getPersonajesByPage(`https://rickandmortyapi.com/api/character?page=1`)
}

/**
 * Obtiene los personajes de la API según el filtro
 */
export const getPersonajesByFilter = async (filter: string) => {
    return getPersonajesByPage(`https://rickandmortyapi.com/api/character/?name=${filter}&page=1`)
}

/**
 * Obtiene los personajes de la API según el array de ids
 */
export const getPersonajesByArray = async (array: Array<number>) => {
    let data = []
    if (array.length > 0) {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${String(array)}`)
            .then((response) => response.json())
        if (response.length > 0) {
            data = mapPersonajes(response)
        } else {
            data = mapPersonajes([response])
        }
    }
    return data
}

/**
 * Mapea los episodios de la API a episodios de tipo Episodio
 */
const mapEpisodes = (episodesToMap: any) => {
    return episodesToMap.map((episodio: any) => ({
        id: episodio.id,
        titulo: episodio.name,
        fecha: episodio.air_date,
        episodio: episodio.episode,
    }))
}

/**
 * Obtiene los episodios de la API según el array de ids de episodios
 */
export const getEpisodiosByArray = async (array: Array<number>) => {
    let data = []
    if (array.length > 0) {
        const response = await fetch(`https://rickandmortyapi.com/api/episode/${String(array)}`)
            .then((response) => response.json())
        if (response.length > 0) {
            data = mapEpisodes(response)
        } else {
            data = mapEpisodes([response])
        }
    }
    return data
}