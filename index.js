/****************** NPM Dependencies ******************/
const express = require('express')

/****************** Project Dependencies ******************/
const errors = require('./middlewares/errors');

/****************** Enable Express ******************/
const app = express()
const port = 3000

/****************** Express Options ******************/
app.use(express.json()); //Para habilitar envio de JSON al servidor
app.use(express.static('public')); //Habilitar los archivos para que sean estaticos
app.use(express.urlencoded()); //Habilita la lectura del body por metodo post

/****************** Enable Pug ******************/
app.set('view engine', 'pug');
app.set('views','./views');

/****************** Routes ******************/
app.get('/', (req, res) => {
    res.render('helloWorld')
})

//Capture All 404 errors
app.use( errors.error404);

/****************** Actice Server ******************/
app.listen(port, () => {
    console.log(`ServerOn http://localhost:${port}`)
})