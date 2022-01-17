/****************** Nodejs Dependencies ******************/
const express = require('express')
const logger = require('morgan');
const helmet = require("helmet");

/****************** Project Dependencies ******************/


/****************** Import Routes ******************/
const indexRoutes = require('./routes/index')

/****************** Enable Express ******************/
const app = express()
const port = process.env.PORT || 3000

/****************** Express Settings ******************/
app.use(express.json()); //Para habilitar envio de JSON al servidor
app.use(express.urlencoded( { extended: false } )); //Habilita la lectura del body por metodo post
app.use(logger('dev')) // habilitar Morgan con preset dev
app.use(helmet());

/****************** Routes ******************/
app.use('/api', indexRoutes);

/****************** Actice Server ******************/
app.listen(port, () => {
    console.log(`ServerOn http://localhost:${port}`)
})