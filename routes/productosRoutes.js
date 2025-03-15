import express from 'express';
const router = express.Router();

import productosController from '../controllers/productosController.js';

router.get('/productos', productosController.getProductos);
router.get('/categoria/:idcategoria', productosController.getProductosPorCategoria);
router.get('/:id', productosController.getProducto);

export default router;
