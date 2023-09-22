import React from "react";
import '../../assets/css/button.css'


export const Button = ({contextData,idBtn,funcion}) => {

        if(idBtn === 'guardar') {
            return(
            <button id='guardar' type="submit" className="btn" onClick={funcion}>{contextData}</button>
            )
        }if(idBtn === 'limpiar'){
            return(
            <button id='limpiar' type="submit" className="btn" onClick={funcion}>{contextData}</button>
            )
        }if (idBtn === 'actualizar'){
            return(
                <button id='actualizar' type="submit" className="btn" onClick={funcion}>{contextData}</button>
                )
        }else{
            return(
                <button type="submit" className="btn">{contextData}</button>
                )
        }

}