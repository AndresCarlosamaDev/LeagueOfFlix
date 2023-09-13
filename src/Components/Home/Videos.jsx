import React from "react";
import "../../assets/css/video.css";
import logoLCK from "../../assets/img/LCK_logo_White.png";
import left from "../../assets/img/left.png";
import right from "../../assets/img/right.png";

export const Videos = () => {
  const moveLeft = () => {
    console.log("Boton left funcionando");
    const videos_container = document.querySelector(".videos_container");
    return (videos_container.scrollLeft -= 1500);
  };

  const moveRight = () => {
    console.log("Boton right funcionando");
    const videos_container = document.querySelector(".videos_container");
    return (videos_container.scrollLeft += 1500);
  };

  return (
    <section className="videos">
      {/* Liga LCK */}
      <div className="videos_conteinAll">
        <div className="videos_logo">
          <img src={logoLCK} alt="Logo_LCK" />
        </div>
        <div className="videos_botones azul">
          <img
            className="btn-left"
            onClick={moveLeft}
            src={left}
            alt="boton_izquierda"
          />
          <img
            className="btn-right"
            onClick={moveRight}
            src={right}
            alt="boton_derecha"
          />
        </div>
        <div className="videos_container">
          <div className="videos_content">
            <iframe
              className="videos_content_unit"
              src="https://www.youtube.com/embed/5kS-BicsjS4?si=eUjH7ZjPIfLLL46s"
              title="YouTube video player"
              allowfullscreen
            ></iframe>
          </div>

          <div className="videos_content">
            <iframe
              className="videos_content_unit"
              src="https://www.youtube.com/embed/eBvuEn21KTE?si=mnoXEEwW7G78vCj7"
              title="YouTube video player"
              allowfullscreen
            ></iframe>
          </div>

          <div className="videos_content">
            <iframe
              className="videos_content_unit"
              src="https://www.youtube.com/embed/ReDxxWdOpCA?si=cFYPWoCdXi_xmMGH"
              title="YouTube video player"
              allowfullscreen
            ></iframe>
          </div>

          <div className="videos_content">
            <iframe
              className="videos_content_unit"
              src="https://www.youtube.com/embed/5kS-BicsjS4?si=eUjH7ZjPIfLLL46s"
              title="YouTube video player"
              allowfullscreen
            ></iframe>
          </div>

          <div className="videos_content">
            <iframe
              className="videos_content_unit"
              src="https://www.youtube.com/embed/5kS-BicsjS4?si=eUjH7ZjPIfLLL46s"
              title="YouTube video player"
              allowfullscreen
            ></iframe>
          </div>

          <div className="videos_content">
            <iframe
              className="videos_content_unit"
              src="https://www.youtube.com/embed/5kS-BicsjS4?si=eUjH7ZjPIfLLL46s"
              title="YouTube video player"
              allowfullscreen
            ></iframe>
          </div>

          <div className="videos_content">
            <iframe
              className="videos_content_unit"
              src="https://www.youtube.com/embed/5kS-BicsjS4?si=eUjH7ZjPIfLLL46s"
              title="YouTube video player"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
