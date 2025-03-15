const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8000;
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

const empresaRoute = require('./rutas/empresa');
const menuRoute = require('./rutas/menu');
const paginaRoute = require('./rutas/pagina');
const blogRoute = require('./rutas/blog');
const productoRoute = require('./rutas/producto');

app.use('/empresa',empresaRoute);
app.use('/menu',menuRoute);
app.use('/pagina',paginaRoute);
app.use('/blog',blogRoute);
app.use('/producto',productoRoute);

mongoose.connect(
      process.env.CONEXION_BD,
      { useNewUrlParser: true , useUnifiedTopology: true },
      ()=>{
            console.log('Conectado a la BD');
      }
);


app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
    });

