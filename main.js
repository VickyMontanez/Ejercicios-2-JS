// Taller JavaScript 2
//2. Dado un número indicar si es par o impar y si es mayor de 10.
let numero = Number(prompt("Ingresa cualquier número : "));
let pm = numero%2;

if (pm==0){
    console.log(`El numero que ingresaste ${numero} es PAR ✍(◔◡◔)`);
}else {
    console.log(`El numero que ingresaste ${numero} es IMPAR ✍(◔◡◔)`);
};

if (numero > 10){
    console.log(`El numero ${numero} es MAYOR que 10 ≧◠‿◠≦✌`);
}else{
    console.log(`El numero ${numero} es MENOR que 10 ≧◠‿◠≦✌`);
};