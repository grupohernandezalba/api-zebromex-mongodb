import Producto from '../models/Producto.js';

const getProductos = (req, res) => {
    Producto.find()
    .then(productos => {
        res.json(productos);
    })
    .catch(err => {
        res.status(400).send(err);
    });
};

export default { getProductos };