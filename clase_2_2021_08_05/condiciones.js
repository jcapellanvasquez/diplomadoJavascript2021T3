const prompt = require('prompt');

let var1 = 100
let var2 = 100

// condicional if, else, else if
/* 
    Operadores Comparacion: >=, <=, !=, !==
    Operdaores Logicos: || (or), && (and)
*/ 

// if (var1 > var2) console.log("Si, la var1 es mayor a var2")
// if (var1 >= var2) console.log("Si, la var1 es mayor o igual a var2")

// console.log(var1 > var2)

prompt.start();

let nombreInput = ['var1', 'var2']

prompt.get(nombreInput, function(error,userInput) {
    // if (userInput.var1 > userInput.var2) console.log("Si, la var1 es mayor a var2")

    let var1 = +userInput.var1
    let var2 = +userInput.var2

    if (var1 == var2) {
        console.log("Si, la var1 es igual a var2")
    }
    else if(var1 > var2) {
        console.log("Si, la var1 es mayor a var2")
    }  
    else {
        console.log("No, la var1 es NO mayor o igual a var2")
    }
})
