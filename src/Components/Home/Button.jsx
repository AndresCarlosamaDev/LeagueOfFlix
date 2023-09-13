import React from "react";
import '../../assets/css/button.css'


export const Button = ({contextData}) => {
    return (
        <button className="btn">{contextData}</button>
    )
}