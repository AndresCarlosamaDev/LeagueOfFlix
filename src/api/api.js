import axios from "axios"

const api = axios.create({
    baseURL: "https://j-server-league-of-flix.vercel.app/"
    // baseURL: "http://localhost:5000"
})
// const urlBase = "http://localhost:5000"
const urlServer = "https://j-server-league-of-flix.vercel.app/"


// Formulario Categoria
export const buscar = async (url, setData) => {
    const response = await api.get(url)    
    setData(response.data)
}

export const crearLiga = (url, ligaObj) => {
    const nuevaLiga = `${urlServer}/${url}`
    return axios.post(nuevaLiga, ligaObj)
}

export const actualizarLiga = async (ligaObj) => {

}

export const borrarLiga = async (url,idLiga) => {
    const eliminarLiga = `${urlServer}${url}/${idLiga}`
    await axios.delete(eliminarLiga)
}


// Formulario Videos
export const buscarVideos = async (url, setData) => {
    const response = await api.get(url)
    setData(response.data)
}

export const crearVideo = (url, ligaObj) => {
    const nuevaLiga = `${urlServer}/${url}`
    return axios.post(nuevaLiga, ligaObj)
}