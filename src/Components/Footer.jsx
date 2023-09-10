import React from "react";
import '../assets/css/footer.css'
import logo from '../assets/img/Logo.png'


export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_content">
                <div className="footer_img">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="footer_h4">
                    <h4>Desarrollado por Andrés Carlosama</h4>
                </div>
            </div>
        </footer>
    )
}