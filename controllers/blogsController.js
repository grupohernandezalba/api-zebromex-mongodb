import Blog from '../models/Blog.js';

const getBlogs = (req, res) => {
    Blog.find()
    .then(blogs => {
        res.json(blogs);
    })
    .catch(err => {
        res.status(400).send(err);
    });
};

const getBlog = (req, res) => {
    Blog.find({ _id : req.params.id })
    .then(blogs => {
        res.json(blogs);
    })
    .catch(err => {
        res.status(400).send(err);
    });
};

const deleteBlog = (req, res) => {
    Blog.deleteOne({ _id : req.params.id })
    .then(registros => {
        res.json(registros);
    })
    .catch(err => {
        res.status(400).send(err);
    });
}

const createBlog = (req, res) => {
    const datos = req.body;
    const nuevoBlog = new Blog(datos);
    nuevoBlog.save()
    .then(registro => {
        res.json(registro);
    })
    .catch(err => {
        res.status(400).send(err);
    });
};

const updateBlog = (req, res) => {
    const datos = req.body;
    Blog.updateOne({ _id : req.params.id }, datos)
    .then(registro => {
        res.json(registro);
    })
    .catch(err => {
        res.status(400).send(err);
    });
};

export default { getBlogs, getBlog, deleteBlog, createBlog, updateBlog }; 
