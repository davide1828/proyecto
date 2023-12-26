const express = require('express');


const app = express();
const {  mongoConn } = require('./databases/configuration');
mongoConn()

const fileUpload = require('express-fileupload');
const cors = require('cors');

const clientes = require('./routes/cliente');
const tiposProyecto = require('./routes/tipoProyecto');
const etapas = require('./routes/etapa');

const Universidades = require('./routes/universidad');
const cliente = require('./models/cliente');



//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
app.use(cors());

app.use('/api/tiposproyectos', tiposProyecto);

app.use('/api/clientes', clientes);
app.use('/api/universidades', Universidades);
app.use('/api/etapas', etapas);
module.exports = app;