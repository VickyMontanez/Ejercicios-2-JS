// Taller JavaScript 2
// 7.Programa que pida el ingreso del nombre y precio de un artículo y la cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador en su factura.

let articulos = [];
let precio = [];
let cantidad = [];
let productos = {Producto:articulos, Precio: precio, Cantidad: cantidad}
let resultado = 0;

function myFactura() {
    let text = "¿Deseas agregar algún articulo?";
    while (confirm(text) == true) {
        articulos.push(prompt("¿Cuál es el nombre del producto?"));
        precio.push(Number(prompt("¿Cuál es el precio del articulo?")));
        cantidad.push(Number(prompt("¿Cuál es la cantidad?")))
    }
    for (let i = 0; i < articulos.length; i++) {
        resultado = (precio[i]*cantidad[i])+resultado;
    }
    console.table(productos);
    console.log("Su total a pagar es ", resultado);
} 