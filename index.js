import express from 'express';
const app = express();
import productosRoutes from './routes/productosRoutes.js';

import documentacionRoutes from './routes/documentacionRoutes.js';
 
app.set('view engine', 'ejs');
import ejs from 'ejs';
app.engine('ejs', ejs.renderFile);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import mongoose from 'mongoose';
import conexion from './conexion.js';

mongoose.connect(conexion)
    .then(() => {
        console.log('Conexión a la base de datos establecida');
    })
    .catch(err => {
        console.log('Error al conectar a la base de datos', err);
    });

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});

app.use(productosRoutes);
app.use(documentacionRoutes);

