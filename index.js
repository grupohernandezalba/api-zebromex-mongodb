import express from 'express';
import ejs from 'ejs';
import mongoose from 'mongoose';
import cors from 'cors';

import conexion from './conexion.js';
import productosRoutes from './routes/productosRoutes.js';
import documentacionRoutes from './routes/documentacionRoutes.js';

 
const app = express();

app.use(cors());
app.use(express.static('public'));
app.set('views', './views');

app.set('view engine', 'ejs');
app.engine('ejs', ejs.renderFile);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


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


