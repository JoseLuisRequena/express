const mongoose = require('mongoose');
const {uri} = require('../env');

mongoose.connect( uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e));
