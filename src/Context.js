import React, { createContext } from "react";
import { Categoria } from "./Components/NuevoVideo/Categoria";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const datosForms = {

    // Formulario Liga
    titulo: 'Ingresa un titulo',
    url: 'Ingresa la url del video',
    desc: 'Ingresa una descripción (opcional)',
    cod: 'Código de seguridad',

    liga: 'Ingresa nombre de la liga',
    descLiga: 'Ingresa una descripción',
    img: 'Carga el logo de la liga',
    codLiga: 'Codigo de Liga',

    btnGuardar: 'Guardar',
    btnLimpiar: 'Limpiar',
    btnNuevaCat: 'Nueva Categoría',
    btnHeader: 'Nuevo Video',

    idBtnGuardar: 'guardar',
    idBtnLimpiar: 'limpiar',

    // Formulario Video
    tituloVideo: 'Ingresa un titulo al video',
    urlVideo: 'Ingresa la url del video',
    // ----liga
    descVideo: 'Ingresa una descripción (opcional)',
    codVideo: 'Código de seguridad',
  }

  return (
    <CounterContext.Provider value={datosForms}>
        {children}
    </CounterContext.Provider>
  );
};
