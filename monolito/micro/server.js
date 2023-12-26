const dotenv = require('dotenv').config();
<<<<<<< HEAD
const express = require('express');

const app = express();

const {  mongoConn } = require('./databases/configuration');
=======
const app = require('./app');

>>>>>>> b8afbf1950ded3083a96d72e6fca1f7c6ec3b317

// configuraciones
app.set('port', process.env.PORT || 3000);


// escucha
app.listen(app.get('port'), () => {
    console.log(`Arranca el servidor en el puerto: ${app.get('port')}`)
});