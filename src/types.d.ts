interface Personaje {
    id: number,
    nombre?: string,
    url?: string,
    imagen?: string,
    planeta?: string,
    genero?: string,
    episodios?: Array<string>,
}

interface Episodio {
    id: number,
    titulo: string,
    fecha: string,
    episodio: string,
}