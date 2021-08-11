let miArray = [
    'T',
    'O',
    'D',
    'O',
    'S'
];

let miArray2 = [
    'T',
    90,
    0.29,
    true,
    [
        'Hola',
        'Adios'
    ]
];

// Validar que la variables es de tipo Array
// console.log(Array.isArray(miArray))

// console.debug(miArray2)

// Ciclo for
// Sintaxis for (expresionInicial; condicion; expresionIncremento) {}

// for (let indice = 0; indice <= 4; indice = indice + 1) {
//     console.debug('Indice: ' + indice + ' Valor: ' + miArray2[indice])
// }

// console.table(miArray)

let indice = 0;
let stop = true;

while (stop) {
    // Ejercicio, Intente cambiar el codigo para eliminar este if 
    // y que el codigo se comportando igual.
    if(miArray.length == indice) {
        stop = false
    }

    indice = indice + 1; 
    console.log(indice)   
    console.log(miArray[indice])
}
