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

export default { getBlogs, getBlog }; 