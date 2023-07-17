import React from "react";
import "../hojas-de-estilo/BotonBorrar.css";
export default function BotonBorrar(props) {
  return (
    <button className="boton-borrar" onClick={props.manejarBorrador}>
      {props.children}
    </button>
  );
}
