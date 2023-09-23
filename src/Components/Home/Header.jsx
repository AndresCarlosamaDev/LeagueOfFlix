import React, { useContext } from "react";
import logo from "../../assets/img/Logo.png";
import "../../assets/css/header.css";
import { Button } from "./Button";
import { CounterContext } from "../../Context";

export const Header = () => {
  const ruta = window.location.href;
  const rutaActual = "https://league-of-flix.vercel.app/"
  // const rutaActual = "http://localhost:3000/"

  const displayBtn = () => {
    if (ruta === rutaActual){
      return(true)
    } else {
      return(false)}
  }

  //Texto btn
  const contextData = useContext(CounterContext)

  return (
    <header className="header">
      <div className="header_elements">
        <div className="header_img">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        {
          displayBtn() && <a href="/videos"><Button contextData={contextData.btnHeader}/></a>
        }
          
      </div>
    </header>
  );
};
