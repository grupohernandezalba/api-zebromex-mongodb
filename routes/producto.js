const express = require('express');
const router = express.Router();
const Producto = require('../modelos/Producto');

router.get('/', async (req, res)=>{

      try{
            const registros = await Producto.find();
            res.json(registros);
      } catch (error){
            res.json({ mensaje : error });
      }

});

router.get('/categoria/:idcategoria', async (req, res)=>{

      try{
            const registros = await Producto.find({ categoria : req.params.idcategoria });
            res.json(registros);
      } catch (error){
            res.json({ mensaje : error });
      }

});

router.get('/:id', async (req, res)=>{

      try{
            const registro = await Producto.find({ _id : req.params.id });
            res.json(registro);
      } catch (error){
            res.json({ mensaje : error });
      }

});

module.exports = router;