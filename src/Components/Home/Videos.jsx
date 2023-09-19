import React, { useState, useEffect } from "react";
import "../../assets/css/video.css";
import logoLCK from "../../assets/img/LCK_logo_White.png";
import left from "../../assets/img/left.png";
import right from "../../assets/img/right.png";
import { buscar, buscarVideos } from "../../api/api";

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

  //Use Effect
  const [videos, setVideos] = useState([]);
  const url = "/videos";

  useEffect(() => {
    buscarVideos(url, setVideos);
  }, [url]);

  console.log(videos, "videos");

  // -----
  //Datos db
  const [ligas, setLigas] = useState([]);
  const urlL = "/ligas";
  useEffect(() => {
    buscar(urlL, setLigas);
    // console.log(ligas)
  }, [url]);

  console.log(ligas, "ligas");

  return (
    <section className="videos">
      {ligas.map((liga) => (
        <div className="videos_conteinAll">
          <div className="videos_logo">
            {/* <img src={liga.nombre} alt={liga.nombre} /> */}
            <h1>{liga.nombre}</h1>
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
            {videos
              .filter((video) => video.liga === liga.nombre)
              .map((video) => (
                <div className="videos_content" key={video.id}>
                  <iframe
                    className="videos_content_unit"
                    src={video.url}
                    title="YouTube video player"
                    allowFullScreen // Cambié allowfullscreen a allowFullScreen
                  ></iframe>
                  <div className="videos_content-text">
                    <h3>{video.titulo}</h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};
