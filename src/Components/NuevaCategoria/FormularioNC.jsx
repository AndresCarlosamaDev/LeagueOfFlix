import React, { useContext } from "react";
import { Input } from "../NuevoVideo/Input";
import { Button } from "../Home/Button";
import { Imagen } from "../NuevaCategoria/Imagen"
import "../../assets/css/FomrularioNC.css";
import { Tabla } from "./Tabla";
import { CounterContext } from "../../Context";

export const FormularioNC = () => {

  const contextData = useContext(CounterContext)

  return (
    <section className="formulario-NC">
      <div className="formulario_contain-NC">
        <form className="formulario_contain_form" action="">
          <h2>Agregar una nueva liga</h2>
          <Input contextData={contextData.liga}/>
          <Input contextData={contextData.descLiga}/>
          <Imagen contextData={contextData.img}/>
          <Input contextData={contextData.codLiga}/>
          <div className="formulario_contain_btns">
            <div className="formulario_contain_btns-save">
              <Button contextData={contextData.btnGuardar}/>
              <Button contextData={contextData.btnLimpiar}/>
            </div>
          </div>
        </form>
      </div>
      <div className="formulario_contain-table">
        <Tabla />
      </div>
    </section>
  );
};
