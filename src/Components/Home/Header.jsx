import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/Logo.png";
import "../../assets/css/header.css";
import { Button } from "./Button";
import { CounterContext } from "../../Context";

export const Header = () => {
  const ruta = window.location.href;
  const rutaActual = "http://localhost:3000/"

  console.log(ruta)

  const displayBtn = () => {
    if (ruta === rutaActual){
      return(true)
    } else {
      return(false)}
  }
  console.log(displayBtn()) //true

  //Texto btn
  const contextData = useContext(CounterContext)

  return (
    <header className="header">
      <div className="header_elements">
        <div className="header_img">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        {
          displayBtn() && <Link to="/nuevo-video"><Button contextData={contextData.btnHeader}/></Link>
        }
          
      </div>
    </header>
  );
};
