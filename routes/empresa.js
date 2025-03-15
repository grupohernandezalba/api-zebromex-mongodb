const express = require('express');
const router = express.Router();
const Empresa = require('../modelos/Empresa');

router.get('/', async (req, res)=>{

      try{
            const registros = await Empresa.find();
            res.json(registros);
      } catch (error){
            res.json({ mensaje : error });
      }

});

router.post('/', async (req,res)=>{
      const registro = new Empresa(req.body);

      try{
            const registroGuardado = await registro.save();
            res.json(registroGuardado);
      } catch (error){
            res.json({ mensaje : error });
      }

});

router.get('/:id', async (req, res)=>{

      try{
            const registro = await Empresa.findById(req.params.id);
            res.json(registro);
      } catch (error){
            res.json({ mensaje : error });
      }

});


router.delete('/:id', async (req,res)=>{
      
      try{
            const registroEliminado = await Empresa.deleteOne({ _id: req.params.id});
            res.json(registroEliminado);
      } catch (error){
            res.json({ mensaje : error });
      }
});

router.patch('/:id', async (req,res)=>{
      
      try{
            const registroActualizado = await Empresa.updateOne(
                  { _id: req.params.id},
                  {
                        $set : {
                              txt_nombre_emp : req.body.txt_nombre_emp,
                              txt_calle_emp : req.body.txt_calle_emp,
                              txt_numero_emp : req.body.txt_numero_emp
                        }
                  }
            );
            res.json(registroActualizado);
      } catch (error){
            res.json({ mensaje : error });
      }

});


module.exports = router;