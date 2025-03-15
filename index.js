import express from 'express';
import mongoose from 'mongoose';
import conexion from './conexion.js';
import productosRoutes from './routes/productosRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


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

