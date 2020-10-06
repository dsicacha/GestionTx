const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const app = express();

//Environment variables
app.set('port',process.env.PORT || 4000);

app.use(morgan('dev')); 
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.use("/api/gestionTx",require('./routes/transmisiones.routes'))    

module.exports = app;