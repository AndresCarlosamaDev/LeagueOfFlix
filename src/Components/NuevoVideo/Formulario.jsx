import React from "react";
import { Input } from "./Input";
import { Categoria } from "./Categoria";
import { Descripcion } from "./Descripcion";
import { Button } from "../Home/Button";
import "../../assets/css/formularioNV.css";

export const Formulario = () => {
  return (
    <section className="formulario">
      <div className="formulario_contain">
        <form className="formulario_contain_form" action="">
          <h2>Agregar un nuevo video</h2>
          <Input />
          <Input />
          <Categoria />
          <Descripcion />
          <Input />
          <div className="formulario_contain_btns">
            <div className="formulario_contain_btns-save">
              <Button />
              <Button />
            </div>
            <div className="formulario_contain_btns-add">
              <Button />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
