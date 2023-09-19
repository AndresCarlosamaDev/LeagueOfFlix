import React, { useContext, useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { validaTituloVideo, validaUrlVideo, validaCategoria,  validaDescVideo, validaCodigoVideo } from "../../validaciones";
import { Categoria } from "./Categoria";
import { Button } from "../Home/Button";
import "../../assets/css/formularioNV.css";
import { CounterContext } from "../../Context";
import { Link } from "react-router-dom";
import { buscar } from "../../api/api";
import { crearVideo } from "../../api/api";
import { v4 as uuid } from "uuid";

export const Formulario = () => {

  // Guardar Videos
  const guardarDatos = () => {

    const url = "videos"
    const datos = {
      id:uuid(),
      titulo:tituloVideo.value,
      url:urlVideo.value,
      liga:ligaVideo.value,
      descripcion:descVideo.value,
      codigo:codVideo.value
    }
    crearVideo(url, datos)

    console.log("Guardando Videos")
  }

  const limpiarDatos = () => {

    console.log("Limpiando Videos")
    setTituloVideo({ value: "", valid: null });
    setUrlVideo({ value: "", valid: null });
    setLigaVideo({ value: "", valid: null });
    setDescVideo({ value: "", valid: null });
    setCodVideo({ value: "", valid: null });
  }


  const contextData = useContext(CounterContext)

  //Hooks
  const [tituloVideo, setTituloVideo] = useState({ value: '', valid :null });
  const [urlVideo, setUrlVideo] = useState({ value: '', valid :null });
  const [ligaVideo, setLigaVideo] = useState({ value: false, valid :null });
  const [descVideo, setDescVideo] = useState({ value: '', valid :null });
  const [codVideo, setCodVideo] = useState({ value: '', valid :null });

  //Datos db
  const url = "/ligas"
  const [ligas, setLigas] = useState([])

  useEffect(() => {
    buscar(url, setLigas)
    // console.log(ligas)
  }, [url])

  return (
    <section className="formulario">
      <div className="formulario_contain">
        <form className="formulario_contain_form" >
          <h2>Agregar un nuevo video</h2>
          <TextField
            sx={{ width: '80%', mb: '1.5rem' }}
          label={contextData.tituloVideo}
          value={tituloVideo.value}
          onChange={(input) => {
            const value = input.target.value;
            const valid = validaTituloVideo(value);
            setTituloVideo({value, valid});
            console.log(value, valid)
          }}
            error={tituloVideo.valid === false}
            helperText={tituloVideo.valid === false && "Verifica tus datos de ingreso"}
          />
          <TextField
            sx={{ width: '80%', mb: '1.5rem' }}
            label={contextData.urlVideo}
            value={urlVideo.value}
            onChange={(input) => {
            const value = input.target.value;
            const valid = validaUrlVideo(value);
            setUrlVideo({value, valid});
            console.log(value, valid)
            }}
            error={urlVideo.valid === false}        
            helperText={urlVideo.valid === false && "Verifica tus datos de ingreso"}
          />
          <Categoria
            ligas={ligas}
            confLigaVideo={setLigaVideo}
            error={ligaVideo.valid === false}
            helperText={ligaVideo.valid === false && "Selecciona la liga a la que pertenece el video"}
           />
          <TextField
          sx={{ width: '80%', mb: '1.5rem' }}
          label={contextData.descVideo}
          value={descVideo.value}
          onChange={(input) => {
            const value = input.target.value;
            const valid = validaDescVideo(value)
            setDescVideo({value, valid})
            console.log(value, valid)
          }}
          error={descVideo.valid === false}
          helperText={descVideo.valid === false && "Verifica tus datos de ingreso"}       
          />
          <TextField
          sx={{ width: '80%', mb: '1.5rem' }}
          label={contextData.codVideo}
          value={codVideo.value}
          onChange={(input) => {
            const value = input.target.value
            const valid = validaCodigoVideo(value)
            setCodVideo({value, valid})
            console.log(value, valid)
          }}
          error={codVideo.valid === false}
          helperText={codVideo.valid === false && "Verifica tus datos de ingreso"}          
          />
          <div className="formulario_contain_btns">
            <div className="formulario_contain_btns-save">
              <Button contextData={contextData.btnGuardar} idBtn={contextData.idBtnGuardar} funcion={guardarDatos}/>
              <Button contextData={contextData.btnLimpiar} idBtn={contextData.idBtnLimpiar} funcion={limpiarDatos}/>
            </div>
            <div className="formulario_contain_btns-add">
              <Link to="/nueva-categoria"><Button contextData={contextData.btnNuevaCat}/></Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
