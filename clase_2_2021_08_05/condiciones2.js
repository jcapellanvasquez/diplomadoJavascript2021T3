
const prompt = require('prompt');

// condicional if, else, else if
/* 
    Operadores Comparacion: >=, <=, !=, !==, ==, ===
    Operdaores Logicos: || (or), && (and)
*/ 

prompt.start();

let nombreInput = ['var1', 'var2']

prompt.get(nombreInput, function(error,userInput) {
    userInput.var1 = +userInput.var1
    userInput.var2 = +userInput.var2
    console.log(typeof(userInput.var1), typeof(userInput.var2))

    if (userInput.var1 === userInput.var2) {
        console.log("Si, son iguales")
    } else {
        console.log("No, no son iguales")
    }
    
    // Esta condicion es para validar cuando var1 y var2 son diferentes en
    // tipo de dato y valor
    // if (userInput.var1 !== userInput.var2) {
    //     console.log("Si, son diferentes")
    // } else {
    //     console.log("else: No son diferentes")
    // }
})


