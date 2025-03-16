import express from 'express';
const router = express.Router();

import empresasController from '../controllers/empresasController.js';

router.get('/empresas', empresasController.getEmpresas);
export default router;
