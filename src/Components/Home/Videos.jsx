import React, { useState, useEffect } from "react";
import "../../assets/css/video.css";
import logoLCK from "../../assets/img/LCK_logo_White.png";
import left from "../../assets/img/left.png";
import right from "../../assets/img/right.png";
import { buscar, buscarVideos } from "../../api/api";
import ReactPlayer from "react-player";

// ---------------
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// ---------------

export const Videos = () => {
  // ---------------
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // ---------------

  const moveLeft = () => {
    console.log("Boton left funcionando");
    const videos_container = document.querySelector(".videos_container");
    return (videos_container.scrollLeft -= 700);
  };

  const moveRight = () => {
    console.log("Boton right funcionando");
    const videos_container = document.querySelector(".videos_container");
    return (videos_container.scrollLeft += 700);
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

  // console.log(ligas, "ligas");

  const mostrarVideo = (id) => {
    
    // console.log("Este es el video :", id)
  }

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
                  <div className="videos_content_unit">
                    <ReactPlayer
                      url={video.url}
                      controls
                      light
                      width='100%'
                      height='100%'
                      onClickPreview={(e) => (e.isTrusted === true ? mostrarVideo(video.id) : console.log("No se abre la ventana")) }
                    >
                    </ReactPlayer>
                  </div>
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
