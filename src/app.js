/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const personas = ["mi perro ", "mi gato ", "mi abuela ", "mi vecino "];
  const acciones = ["se comio ", "rompio ", "escondio ", "perdio "];
  const objetos = ["mi tarea ", "mi libro ", "mi telefono ", "mis llaves "];
  const tiempos = ["anoche", "esta mañana", "ayer", "hace un rato"];

  function generarExcusa() {
    const persona = personas[Math.floor(Math.random() * personas.length)];
    const accion = acciones[Math.floor(Math.random() * acciones.length)];
    const objeto = objetos[Math.floor(Math.random() * objetos.length)];
    const tiempo = tiempos[Math.floor(Math.random() * tiempos.length)];

    return persona + accion + objeto + tiempo;
  }

  document.getElementById("excuse").textContent = generarExcusa();
};
