// Taller JavaScript 2
//3.Construir el algoritmo para determinar el voltaje de un circuito a partir de la resistencia y la intensidad de corriente.

let r = Number(prompt("Ingresa el valor de la resistencia en Ohmnios: "));
let i = Number(prompt("Ingresa el valor de la intensidad en Amperios: "))

let volt = r*i;
console.log("La Resistencia del circuito es = ", r,"A");
console.log("La Intensidad del circuito es =", i,"Ω");
console.log("El Voltaje del circuito es ",volt,"V");