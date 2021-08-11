const prompt = require('prompt');

prompt.start();

let nombreInput = 'var1'

prompt.get(nombreInput, function(error,userInput) {
    let var1 = userInput.var1
    switch(var1) {
        case 'Naranjas':
            console.log('El kilogramo de naranjas cuesta $0.59.');
            break;
        case 'Manzanas':
            console.log('El kilogramo de manzanas cuesta $0.32.');
            break;
        case 'Platanos':
            console.log('El kilogramo de platanos cuesta $0.48.');
            break;
        case 'Cerezas':
            console.log('El kilogramo de cerezas cuesta $3.00.');
            break;
        case 'Mangos':
        case 'Papayas':
            console.log('El kilogramo de mangos y papayas cuesta $2.79.');
            break;
        default:
            console.log('Lo lamentamos, por el momento no disponemos de ' + var1 + '.');
    }
})
