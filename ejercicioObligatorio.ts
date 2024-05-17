import * as rls from 'readline-sync';

let numeroMayor:number= 0

let arregloMayor:number [] = [4, 7, 9, 3, 1, 45, 67, 23, 78, 29, 11, 16];

function calcularMaximo() {
    let numeroMaximo= arregloMayor [0];
    for (let i=1; i<arregloMayor.length;i++){
        if (arregloMayor [i]>numeroMaximo){
           numeroMaximo= arregloMayor [i]
        }
    }
    numeroMayor = numeroMaximo
}
calcularMaximo();
console.log ("El numero mayor del arreglo es: ",numeroMayor);