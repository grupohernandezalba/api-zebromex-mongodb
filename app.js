const express = require('express');
const fs = require('fs');
const fileUpload = require('express-fileupload');
const https = require('https');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8000;
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload());

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
    })

    /*
https.createServer({
      key: fs.readFileSync('../../ssl/keys/d10d9_128a3_f859e374cb453b28e7bf8d13d13db07b.key'),
      cert: fs.readFileSync('../../ssl/certs/_wildcard__zebromex_com_d10d9_128a3_1746851711_f27676571a742a1fca274f66767a23a4.crt')
  }, app).listen(PORT, function(){
      console.log("My https server listening on port " + PORT + "...");
  });

  */