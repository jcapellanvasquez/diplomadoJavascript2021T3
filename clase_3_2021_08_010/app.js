const express = require('express');
const app = express();


app.get('/', function (req, res) {
    // Responder al cliente con solo texto
   //res.send('Hello World')

   // Response al cliente con un archivo html
   res.sendFile( __dirname + '/index.html')
})

// http://localhost:3000/

app.listen(3000)