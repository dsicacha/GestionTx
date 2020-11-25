const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const app = express();

//Environment variables
app.set('port',process.env.PORT || 4000);

app.use(morgan('dev')); 
app.use(express.json());
app.use(express.urlencoded({extended:false}));
/*app.use(cors());*/

//Routes
app.use("/download",require('./routes/Excel.routes'));
app.use("/origen",require('./routes/Origen.routes'));
app.use("/destino",require('./routes/Destino.routes'));
app.use("/transmision",require('./routes/Transmision.routes'));
app.use("/usuario",require('./routes/usuario.routes'));     



module.exports = app;