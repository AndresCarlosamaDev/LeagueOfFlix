//Formulñario NC
export const validaLiga = (liga) => {
    return liga.length > 2 && liga.length < 6 ? true : false
}

export const validaDescripcion = (descripcion) => {
    return descripcion.length > 10 ? true : false
}

export const validaCodigo = (codigo) => {
    return codigo.length > 4 && codigo.length < 8 ? true : false
}

//Formulario Nuevo Video
export const validaTituloVideo = (titulo) => {
    return titulo.length >= 10 ? true : false
}

export const validaUrlVideo = (url) => {
    return url.includes('https://www') ? true : false
}

export const validaCategoria = (categoria) => {
    return categoria ? true : false
}

export const validaDescVideo = (descripcion) => {
    return descripcion.length > 10 ? true : false
}

export const validaCodigoVideo = (codigo) => {
    return (codigo.length > 4 && codigo.length < 8) ? true : false
}