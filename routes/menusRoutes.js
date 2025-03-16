import express from 'express';
const router = express.Router();

import menusController from '../controllers/menusController.js';

router.get('/menus', menusController.getMenus);

export default router;
