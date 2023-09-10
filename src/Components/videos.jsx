import React from "react";
import "../assets/css/video.css";
import logoLCK from "../assets/img/LCK_logo_White.png";
import logoLEC from '../assets/img/LEC_logo_White.png'
import logoLLA from '../assets/img/LLA_logo_White.png'

export const Videos = () => {
  return (
    <section className="videos">

      {/* Liga LCK */}
      <div className="videos_conteinAll">
        <div className="videos_logo">
          <img src={logoLCK} alt="Logo_LCK" />
        </div>
        <div className="videos_container">
          <div className="videos_content">
            <iframe
              className="videos_content_unit"
              src="https://www.youtube.com/embed/5kS-BicsjS4?si=eUjH7ZjPIfLLL46s"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <div className="videos_content">
            <iframe
              className="videos_content_unit"
              src="https://www.youtube.com/embed/5kS-BicsjS4?si=eUjH7ZjPIfLLL46s"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <div className="videos_content">
            <iframe
              className="videos_content_unit"
              src="https://www.youtube.com/embed/5kS-BicsjS4?si=eUjH7ZjPIfLLL46s"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Liga LEC */}
      <div className="videos_conteinAll">
        <div className="videos_logo">
          <img src={logoLEC} alt="Logo_LCK" />
        </div>
        <div className="videos_container">
          <div className="videos_content">
            <iframe
              className="videos_content_unit"
              src="https://www.youtube.com/embed/5kS-BicsjS4?si=eUjH7ZjPIfLLL46s"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <div className="videos_content">
            <iframe
              className="videos_content_unit"
              src="https://www.youtube.com/embed/5kS-BicsjS4?si=eUjH7ZjPIfLLL46s"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <div className="videos_content">
            <iframe
              className="videos_content_unit"
              src="https://www.youtube.com/embed/5kS-BicsjS4?si=eUjH7ZjPIfLLL46s"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Liga LLA */}
      <div className="videos_conteinAll">
        <div className="videos_logo">
          <img src={logoLLA} alt="Logo_LCK" />
        </div>
        <div className="videos_container">
          <div className="videos_content">
            <iframe
              className="videos_content_unit"
              src="https://www.youtube.com/embed/5kS-BicsjS4?si=eUjH7ZjPIfLLL46s"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <div className="videos_content">
            <iframe
              className="videos_content_unit"
              src="https://www.youtube.com/embed/5kS-BicsjS4?si=eUjH7ZjPIfLLL46s"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <div className="videos_content">
            <iframe
              className="videos_content_unit"
              src="https://www.youtube.com/embed/5kS-BicsjS4?si=eUjH7ZjPIfLLL46s"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

    </section>
  );
};
