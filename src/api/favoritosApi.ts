
export const getFavoritos = () => {
    const favoritos = localStorage.getItem('favoritos')
    if (favoritos) {
        return JSON.parse(favoritos)
    }
    return []
}

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

export const resetFavoritos = () => {
    localStorage.removeItem('favoritos')
    return []
}

