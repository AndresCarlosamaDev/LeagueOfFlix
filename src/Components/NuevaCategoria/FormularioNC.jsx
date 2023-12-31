
import React, { useContext, useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "../Home/Button";
import { Imagen } from "../NuevaCategoria/Imagen";
import "../../assets/css/FomrularioNC.css";
import { Tabla } from "./Tabla";
import { CounterContext } from "../../Context";
import { validaLiga, validaDescripcion, validaCodigo } from "../../validaciones";
import { crearLiga, actualizarLiga } from "../../api/api";
import { v4 as uuid } from "uuid";

export const FormularioNC = () => {
  const contextData = useContext(CounterContext);

  //Guardar Liga
  const guardarDatos = () => {
    const url = "ligas"
    const datos = {id:uuid(), nombre:liga.value, descripcion:desc.value, codigo:cod.value}
    crearLiga(url, datos)
    // console.log(datos)
  }

  const limpiarDatos = () => {
    setLiga({ value: "", valid: null });
    setDesc({ value: "", valid: null });
    setImg({ value: "", valid: null });
    setCod({ value: "", valid: null });
  }

  //Hook id
  const [id, setId] = useState()
  
  //Actualizar datos
  const actualizarDatos = (datos) => {
    // console.log(datos)
    
    setId(datos.id)
    
    setLiga({ value: datos.nombre, valid: null });
    setDesc({ value: datos.descripcion, valid: null });
    setImg({ value: "", valid: null });
    setCod({ value: datos.codigo, valid: null });
  }
  
  const envioActualizacionDatos = () => {

    const url = "ligas"
    const datos = {id:id, nombre:liga.value, descripcion:desc.value, codigo:cod.value}
    actualizarLiga(url, datos)
    // console.log(id)
    // console.log(datos)
  }


  //Hooks
  const [liga, setLiga] = useState({ value: "", valid: null });
  const [desc, setDesc] = useState({ value: "", valid: null });
  const [img, setImg] = useState({ value: null, valid: true });
  const [cod, setCod] = useState({ value: "", valid: null });


  return (
    <section className="formulario-NC">
      <div className="formulario_contain-NC" >
        <form className="formulario_contain_form" >
          <h2>Agregar una nueva liga</h2>

          <TextField
            sx={{ width: '80%', mb: '1.5rem' }}
            label={contextData.liga}
            value={liga.value}
            onChange={(input) => {
              const value = input.target.value;
              const valid = validaLiga(value);
              setLiga({ value, valid });
              // console.log(value);
            }}
            error={liga.valid === false}
            helperText={liga.valid === false && "Verifica tus datos de ingreso"}
          />
          <TextField
            sx={{ width: '80%', mb: '1.5rem' }}
            label={contextData.descLiga}
            value={desc.value}
            onChange={(input) => {
              const value = input.target.value;
              const valid = validaDescripcion(value);
              setDesc({ value, valid });
            }}
            error={desc.valid === false}
            helperText={desc.valid === false && "Verifica tus datos de ingreso"}
          />
          <Imagen
            contextData={contextData.img}
            value
            confImg={setImg}
          />
          <TextField
            sx={{ width: '80%', mb: '1.5rem' }}
            label={contextData.codLiga}
            value={cod.value}
            onChange={(input) => {
              const value = input.target.value;
              const valid = validaCodigo(value);
              setCod({ value, valid });
            }}
            error={cod.valid === false}
            helperText={cod.valid === false && "Verifica tus datos de ingreso"}
          />

          <div className="formulario_contain_btns">
            <div className="formulario_contain_btns-save">
              <Button contextData={contextData.btnGuardar} idBtn={contextData.idBtnGuardar} funcion={guardarDatos}/>
              <Button contextData={contextData.btnLimpiar} idBtn={contextData.idBtnLimpiar} funcion={limpiarDatos}/>
              <Button contextData={contextData.btnActualizar} idBtn={contextData.idBtnActualizar} funcion={envioActualizacionDatos}/>
            </div>
          </div>
        </form>
      </div>
      <div className="formulario_contain-table">
        <Tabla url={"ligas"} actualizarDatos={actualizarDatos} />
      </div>
    </section>
  );
};
