import express from 'express';
const router = express.Router();

import productosController from '../controllers/productosController.js';

router.get('/productos', productosController.getProductos);

export default router;
