import React, {useState} from "react";
import '../../assets/css/imagen.css'


export const Imagen = ({contextData, confImg}) => {

    const [img, setImg] = useState({ value: null, valid: true });

    // const subirArchivos = (e) => {
    //     confImg(e)
    // }

    return (
        <div className="imagen_contein">
            <label className="imagen_contain-label">{contextData}</label>
            <input
            type="file"
            name="files"
            // value={img}
            onChange={(e) => confImg(e.target.files)}/>
        </div>
    )
}