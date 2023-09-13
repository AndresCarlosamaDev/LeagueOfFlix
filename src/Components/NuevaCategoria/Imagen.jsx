import React from "react";
import '../../assets/css/imagen.css'


export const Imagen = ({contextData}) => {
    return (
        <div className="imagen_contein">
            <label className="imagen_contain-label">{contextData}</label>
            <input type="file" />
        </div>
    )
}