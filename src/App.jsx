import "./App.css";
import Boton from "./components/boton";
import Pantalla from "./components/Pantalla";
import BotonBorrar from "./components/BotonBorrar";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const manejarClick = (val) => {
    setInput(input + val);
  };
  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("por favor ingrese valores para realizar los calculos");
    }
  };

  return (
    <div className="App">
      <h1>Calculadora</h1>
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton click={manejarClick}>1</Boton>
          <Boton click={manejarClick}>2</Boton>
          <Boton click={manejarClick}>3</Boton>
          <Boton click={manejarClick}>+</Boton>
        </div>
        <div className="fila">
          <Boton click={manejarClick}>4</Boton>
          <Boton click={manejarClick}>5</Boton>
          <Boton click={manejarClick}>6</Boton>
          <Boton click={manejarClick}>-</Boton>
        </div>
        <div className="fila">
          <Boton click={manejarClick}>7</Boton>
          <Boton click={manejarClick}>8</Boton>
          <Boton click={manejarClick}>9</Boton>
          <Boton click={manejarClick}>*</Boton>
        </div>
        <div className="fila">
          <Boton click={calcularResultado}>=</Boton>
          <Boton click={manejarClick}>0</Boton>
          <Boton click={manejarClick}>.</Boton>
          <Boton click={manejarClick}>/</Boton>
        </div>
        <div className="fila">
          <BotonBorrar manejarBorrador={() => setInput("")}>Borrar</BotonBorrar>
        </div>
      </div>
    </div>
  );
}

export default App;
