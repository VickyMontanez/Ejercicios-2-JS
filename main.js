// Taller JavaScript 2
/* 9.
N atletas han pasado a finales en salto triple en los juegos
olímpicos femenino de 2022. Diseñe un programa que pida por
teclado los nombres de cada atleta finalista y a su vez, sus
marcas del salto en metros. Informar el nombre de la atleta
campeona que se quede con la medalla de oro y si rompió
récord, reportar el pago que será de 500 millones. El récord
esta en 15,50 metros. */

let nombre = [];
let salto = [];
let atleta = {Atleta: nombre, Marca: salto};
function atletas(){
    let text = "¿Deseas agregar alguna Atleta?";
    while (confirm(text) == true){
        nombre.push(prompt("¿Cuál es el nombre del Atleta?"));
        salto.push(Number(prompt("¿Cuál fue su marca de salto?")));
    };
    let mayori = salto.indexOf(Math.max(...salto));
    let mayors = Math.max(...salto);
    console.table(atleta);
    console.log(`La Atleta CAMPEONA es ${nombre[mayori]} con una marca de salto de ${mayors}`);
    for (let i = 0; i < salto.length; i++) {
        if (salto[i]>15.50){
            console.log(`La Atleta que rompio el record es ${nombre[i]} GANA 500 MILLONES!`);
        };
    }
};
