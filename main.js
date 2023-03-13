// Taller JavaScript 2
//5. Construir el algoritmo que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, en caso contrario, informar el producto y la división del primero respecto al segundo.

let numeros =[]; 

for (let i = 0; i <2; i++){
     numeros.push(Number(prompt(`Ingresa ${i+1} número:`)));
}

mayorn= Math.max(...numeros)
mayori = numeros.indexOf(Math.max(...numeros));

if (mayori==0){
    function add(arrNumbers) {
        var resultado = arrNumbers.reduce(function(a, b) {
          return a + b;
        });
        return resultado;
      }

      function sub(arrNumbers) {
        var resultado = arrNumbers.reduce(function(a, b) {
          return a - b;
        });
        return resultado;
      }
    console.log(`Tus números son ${numeros}`);
    console.log(`El primer número ${mayorn} es el mayor entonces: `);
    console.log("La suma  es: " + add(numeros));
    console.log("La resta es: " + sub(numeros));
} else if (mayori == 1){
    function mul(arrNumbers) {
        var resultado = arrNumbers.reduce(function(a, b) {
          return a * b;
        });
        return resultado;
    }
    function div(arrNumbers) {
        var resultado = arrNumbers.reduce(function(a, b) {
          return a / b;
        });
        return resultado;
    }
    console.log(`Tus números son ${numeros}`);
    console.log(`El segundo número ${mayorn} es el mayor entonces: `);
    console.log("La multiplicación es: " + mul(numeros));
    console.log("La division es: " + div(numeros));
}
