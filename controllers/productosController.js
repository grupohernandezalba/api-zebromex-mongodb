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

const getProductosPorCategoria = (req, res) => {
    console.log(req.params.idcategoria);
    Producto.find({ categoria : req.params.idcategoria })
    .then(productos => {
        res.json(productos);
    })
    .catch(err => {
        res.status(400).send(err);
    });
};

const getProducto = (req, res) => {
    Producto.find({ _id : req.params.id })
    .then(producto => {
        res.json(producto);
    })
    .catch(err => {
        res.status(400).send(err);
    });
};


export default { getProductos, getProductosPorCategoria, getProducto }; 