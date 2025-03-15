const express = require('express');
const router = express.Router();
const Pagina = require('../modelos/Pagina');

router.get('/', async (req, res)=>{

      try{
            const registros = await Pagina.find();
            res.json(registros);
      } catch (error){
            res.json({ mensaje : error });
      }

});

router.get('/:seccion', async (req, res)=>{

      try{
            const registro = await Pagina.find({ seccion : req.params.seccion });
            res.json(registro);
      } catch (error){
            res.json({ mensaje : error });
      }

});

module.exports = router;