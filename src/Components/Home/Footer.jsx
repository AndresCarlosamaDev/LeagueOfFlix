import React from "react";
import '../../assets/css/footer.css'
import logo from '../../assets/img/Logo.png'
//Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';


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
                <div className="footer_links">
                    <a href="https://github.com/AndresCarlosamaDev"><GitHubIcon/></a>
                    <a href="https://www.linkedin.com/in/andr%C3%A9scarlosama/"><LinkedInIcon/></a>
                    <a href="/"><LanguageIcon/></a>
                </div>
            </div>
        </footer>
    )
}