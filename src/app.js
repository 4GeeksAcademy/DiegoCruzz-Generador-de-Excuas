/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const people = ["mi perro ", "mi gato ", "mi abuela ", "mi vecino "];
  const actions = ["se comio ", "rompio ", "escondio ", "perdio "];
  const objects = ["mi tarea ", "mi libro ", "mi telefono ", "mis llaves "];
  const times = ["anoche", "esta mañana", "ayer", "hace un rato"];

  function generateExcuse() {
    const person = people[Math.floor(Math.random() * personas.length)];
    const action = actions[Math.floor(Math.random() * acciones.length)];
    const object = objects[Math.floor(Math.random() * objetos.length)];
    const time = times[Math.floor(Math.random() * tiempos.length)];

    return person + action + object + time;
  }

  document.getElementById("excuse").textContent = generateExcuse();
};
