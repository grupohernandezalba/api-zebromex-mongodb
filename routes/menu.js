const express = require('express');
const router = express.Router();
const Menu = require('../modelos/Menu');

router.get('/', async (req, res)=>{

      try{
            const registros = await Menu.find().sort({int_orden_men: "ascending"});
            res.json(registros);
      } catch (error){
            res.json({ mensaje : error });
      }

});

module.exports = router;