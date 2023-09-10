import React from "react";
import logoLCK from "../assets/img/LCK_logo_White.png";
import "../assets/css/sobreBanner.css";

export const SobreBanner = () => {
  return (
    <section className="SobreBanner">
        <div className="SobreBanner_cont_All">
            <div className="SobreBanner_contain">
                <div className="container-btn">
                    <button>
                        <img src={logoLCK} alt="Logo_LCK" />
                    </button>
                </div>
                <div className="container-description">
                    <h3>Challenge React</h3>
                    <p>
                        Este challenge es una forma de aprendizaje. Es un mecanismo donde
                        podrás comprometerte en la resolución de un problema para poder
                        aplicar todos los conocimientos adquiridos en la formación React.
                    </p>
                </div>
            </div>
            <div className="SobreBanner_video">
                <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/SUW8sIde2KM?si=wwNrmeBjiVUi_Azm"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                ></iframe>
            </div>
        </div>
    </section>
  );
};
