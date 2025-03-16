import express from 'express';
const router = express.Router();
import blogsController from '../controllers/blogsController.js';

router.get('/blogs', blogsController.getBlogs);
router.get('/blog/:id', blogsController.getBlog);

export default router;
