
/**
 * Devuelve listado de favoritos en forma de array de ids de personajes
 */
export const getFavoritos = () => {
    const favoritos = localStorage.getItem('favoritos')
    if (favoritos) {
        return JSON.parse(favoritos)
    }
    return []
}

/**
 * Añade un favorito al listado de favoritos
 * Devuelve el resultado
 */
export const addFavorito = (favorito: number) => {
    let favoritos = getFavoritos()
    if (!favoritos) {
        favoritos = []
    }

    if (favoritos.includes(favorito)) {
        return favoritos
    }

    const newFavoritos = [...favoritos, favorito]
    localStorage.setItem('favoritos', JSON.stringify(newFavoritos))

    return newFavoritos
}

/**
 * Elimina un favorito del listado de favoritos
 * Devuelve el resultado
 */
export const removeFavorito = (favorito: number) => {
    const favoritos = getFavoritos()
    if (!favoritos) {
        return []
    }

    if (!favoritos.includes(favorito)) {
        return favoritos
    }

    const newFavoritos = favoritos.filter((f: number) => f !== favorito)
    localStorage.setItem('favoritos', JSON.stringify(newFavoritos))

    return newFavoritos
}

/**
 * Añade o elimina un favorito del listado de favoritos, dependiendo de su estado actual
 * Devuelve el resultado
 */
export const toggleFavorito = (favorito: number) => {
    const favoritos = getFavoritos()
    if (!favoritos) {
        return addFavorito(favorito)
    }

    if (!favoritos.includes(favorito)) {
        return addFavorito(favorito)
    }

    return removeFavorito(favorito)
}

/**
 * Elimina todos los favoritos
 * Devuelve el resultado
 */
export const resetFavoritos = () => {
    localStorage.removeItem('favoritos')
    return []
}

