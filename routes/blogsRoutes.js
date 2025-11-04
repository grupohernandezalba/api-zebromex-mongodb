import express from 'express';
const router = express.Router();

import blogsController from '../controllers/blogsController.js';

router.get('/blogs', blogsController.getBlogs);
router.get('/blog/:id', blogsController.getBlog);
router.delete('/blog/:id', blogsController.deleteBlog);
router.post('/agregablog', blogsController.createBlog);
router.put('/blog/:id', blogsController.updateBlog);


export default router;
