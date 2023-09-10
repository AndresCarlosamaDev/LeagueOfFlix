import React from "react";
import logo from "../assets/img/Logo.png";
import "../assets/css/header.css";
import { Button } from "./Button";

export const Header = () => {
  return (
      <header className="header">
        <div className="header_elements">
          <div className="header_img">
            <img src={logo} alt="Logo" />
          </div>
          <div className="header_btn">
            <Button variant="contained">Nuevo Video</Button>
          </div>
        </div>
      </header>
  );
};
