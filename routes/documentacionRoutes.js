//const express = require('express');
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Ingresando a la documentacion');
    //res.send('<h1>documentacion</h1>');
    res.render('documentacion', { titulo: 'Documentación' });
});

//module.exports = router;

export default router;
