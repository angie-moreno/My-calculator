import React from "react";
import "../hojas-de-estilo/Boton.css";

export default function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };
  return (
    <button
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : null
      } `}
      onClick={() => props.click(props.children)}
    >
      {props.children}
    </button>
  );
}
