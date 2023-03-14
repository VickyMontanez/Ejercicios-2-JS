// Taller JavaScript 2
/* 10.Desarrolle un programa cíclico que capture un dato
numérico cada vez, y los vaya acumulando. El programa se
detiene cuando el usuario digita un cero. El programa debe
mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
VALOR Y MENOR VALOR. */

let numeros = [];
let numero = 1000000;

while(numero != 0){
    numero = Number(prompt("Ingrese un número:"));
    numeros.push(numero);
}
    
console.log(numeros);
console.log(`La suma es ${numeros.reduce((previous, current) => current += previous)}`);
console.log(`El promedio es ${numeros.reduce((previous, current) => current += previous)/numeros.length}`);
console.log(`Hay ${numeros.length} números`);
console.log(`El número mayor es ${Math.max(...numeros)}`);
console.log(`El número menor es ${Math.min(...numeros)}`);