// Taller JavaScript 2
//Construir el algoritmo para un programa que ingrese tres notas de un alumno, si el promedio es menor o igual a 3.9 mostrar un mensaje "Estudie“, de lo contrario un mensaje que diga "becado"
let notas = [];
let promedio= 0;

for (let i= 1; i< 4; i++){
    notas.push(parseFloat(prompt(`Ingresa tu nota ${i}`)))
};
for(let i=0; i<3; i++){
    promedio += notas[i]/3
};

console.log("Tus notas son: ",notas);
console.log("Tu promedio es: ", promedio.toFixed(2));

if (promedio <= 3.9){
    console.log("Estudie (ㆆ_ㆆ)");
} else{
    console.log("Becado ʕ•́ᴥ•̀ʔっ")
}

