// Taller JavaScript 2
//4. Construir el algoritmo que solicite el nombre y edad de 3 personas y determine el nombre de la persona con mayor edad.

let nombres= [];
let edades = [];
let usu = {Nombre: nombres, Edad :edades};
let indice;
let mayor;

for (let i = 1; i <4; i++){
    nombres.push(prompt(`Ingresa ${i} el nombre:`));
    edades.push(Number(prompt(`Ingresa ${i} la edad:`)));
}

indice = edades.indexOf(Math.max(...edades));
mayor = Math.max(...edades);
console.table(usu);
console.log("La persona con mayor edad es",nombres[indice],`con ${mayor} años`);