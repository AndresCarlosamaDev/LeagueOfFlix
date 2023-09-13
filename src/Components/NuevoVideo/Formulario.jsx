import React, { useContext } from "react";
import { Input } from "./Input";
import { Categoria } from "./Categoria";
import { Button } from "../Home/Button";
import "../../assets/css/formularioNV.css";
import { CounterContext } from "../../Context";
import { Link } from "react-router-dom";

export const Formulario = () => {

  const contextData = useContext(CounterContext)

  return (
    <section className="formulario">
      <div className="formulario_contain">
        <form className="formulario_contain_form" action="">
          <h2>Agregar un nuevo video</h2>
          <Input contextData={contextData.titulo}/>
          <Input contextData={contextData.url}/>
          <Categoria />
          <Input contextData={contextData.desc}/>
          <Input contextData={contextData.cod}/>
          <div className="formulario_contain_btns">
            <div className="formulario_contain_btns-save">
              <Button contextData={contextData.btnGuardar}/>
              <Button contextData={contextData.btnLimpiar}/>
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
