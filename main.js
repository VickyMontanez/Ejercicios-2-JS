// Taller JavaScript 2
// 8.Programa que Ingrese por teclado: a. el valor del lado de un cuadrado para mostrar por pantalla el perímetro del mismo b. la base y la altura de un rectángulo para mostrar el área del mismo
let lado;
let base;
let altura;

lado = (Number(prompt("¿Cuál es el valor del lado del cuadrado?")));
base = (Number(prompt("¿Cuál es el valor de la base del rectángulo?")));
altura = (Number(prompt("¿Cuál es el valor de la altura del rectángulo?")));
console.log("El perimetro del cuadrado es = ", (lado*4));
console.log("El área del rectangulo es = ", (base*altura));

