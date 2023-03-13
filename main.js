// Taller JavaScript 2
//6.Construir el algoritmo en Javascript para un programa para cualquier cantidad de estudiantes que lea el nombre, el sexo y la nota definitiva y halle al estudiante con la mayor nota y al estudiante con la menor nota y cuantos eran hombres y cuantos mujeres.

let nombres = [];
let sexo = [];
let notas = [];
let alumnos= {Alumno:nombres, Sexo:sexo, Nota:notas};

function myFunction() {
    let text = "Deseas agregar un alumno?";
    while (confirm(text) == true) {
        nombres.push(prompt("Agrega el nombre del alumno:"));
        sexo.push(prompt("Agrega el sexo del alumno (F/M):"));
        notas.push(Number(prompt("Agrega la nota definitiva del alumno:")))
    }

    let mayori = notas.indexOf(Math.max(...notas));
    let mayorn = Math.max(...notas);
    let menori = notas.indexOf(Math.min(...notas));
    let menorn = Math.min(...notas);
    
    var repetidos = {};
    sexo.forEach(function(numero){
        repetidos[numero] = (repetidos[numero] || 0) + 1;});

    console.table(alumnos);
    console.log(`El estudiante ${nombres[mayori]} tiene la MAYOR nota : ${mayorn}`);
    console.log(`El estudiante ${nombres[menori]} tiene la MENOR nota : ${menorn}`);
    console.log(`En esta clase hay tantos estudiantes (MASCULINOS/FEMENINOS):`, repetidos);
}
