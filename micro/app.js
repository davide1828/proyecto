const express = require('express');

<<<<<<< HEAD

const app = express();
const {  mongoConn } = require('./databases/configuration');
mongoConn()
=======
>>>>>>> b8afbf1950ded3083a96d72e6fca1f7c6ec3b317

const app = express();
const {  mongoConn } = require('./databases/configuration');
mongoConn()

const cors = require('cors');

<<<<<<< HEAD

const proyecto = require('./routes/proyecto');



=======
const tiposProyecto = require('./routes/tipoProyecto');

const proyectos = require('./routes/proyecto');
>>>>>>> b8afbf1950ded3083a96d72e6fca1f7c6ec3b317

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

<<<<<<< HEAD

app.use('/api/proyectos', proyecto);
=======
app.use('/api/tiposproyectos', tiposProyecto);
app.use('/api/proyectos', proyectos);

module.exports = app;
>>>>>>> b8afbf1950ded3083a96d72e6fca1f7c6ec3b317
