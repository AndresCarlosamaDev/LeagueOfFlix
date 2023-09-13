import React, { createContext } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const datosForms = {
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

    //Data Ligas
    ligas: {
      
    }

  }

  return (
    <CounterContext.Provider value={datosForms}>
        {children}
    </CounterContext.Provider>
  );
};
