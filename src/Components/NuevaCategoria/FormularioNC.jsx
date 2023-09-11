import React from "react";
import { Descripcion } from "../NuevoVideo/Descripcion";
import { Input } from "../NuevoVideo/Input";
import { Button } from "../Home/Button";
import "../../assets/css/FomrularioNC.css";
import { Tabla } from "./Tabla";

export const FormularioNC = () => {
  return (
    <section className="formulario-NC">
      <div className="formulario_contain-NC">
        <form className="formulario_contain_form" action="">
          <h2>Agregar una nueva liga</h2>
          <Input />
          <Descripcion />
          <Input />
          <Input />
          <div className="formulario_contain_btns">
            <div className="formulario_contain_btns-save">
              <Button />
              <Button />
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
