
import './App.css';
import agustin from './images/agustin.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = valor => {
    setInput(input + valor);   
  };

  const calcResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Primero valores para realizar los calculos");
   }
  };

  return (
    <div className='App'>
      <div class='agustin-logo-contenedor'>
        Agustin <br/> 
      Calculator
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton makeClic={addInput}>1</Boton>
          <Boton makeClic={addInput}>2</Boton>
          <Boton makeClic={addInput}>3</Boton>
          <Boton makeClic={addInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton makeClic={addInput}>4</Boton>
          <Boton makeClic={addInput}>5</Boton>
          <Boton makeClic={addInput}>6</Boton>
          <Boton makeClic={addInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton makeClic={addInput}>7</Boton>
          <Boton makeClic={addInput}>8</Boton>
          <Boton makeClic={addInput}>9</Boton>
          <Boton makeClic={addInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton makeClic={calcResult}>=</Boton>
          <Boton makeClic={addInput}>0</Boton>
          <Boton makeClic={addInput}>.</Boton>
          <Boton makeClic={addInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear makeClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
