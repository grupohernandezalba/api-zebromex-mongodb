const express = require('express');
const router = express.Router();
const Blog = require('../modelos/Blog');

router.get('/', async (req, res)=>{

      try{
            const registros = await Blog.find();
            res.json(registros);
      } catch (error){
            res.json({ mensaje : error });
      }

});

router.get('/:id', async (req, res)=>{

      try{
            const registro = await Blog.find({ _id : req.params.id });
            res.json(registro);
      } catch (error){
            res.json({ mensaje : error });
      }

});

router.delete('/:id', async (req, res)=>{

      try{
            const registros = await Blog.deleteOne({ _id : req.params.id });
            res.json(registros);
      } catch (error){
            res.json({ mensaje : error });
      }

});


router.put('/:id', async (req, res)=>{

      const datos = req.body;

      console.log(req.files);

      try{

            if(req.files)
            {
                  console.log('req.files');
                  
                  const { file } = req.files;
                  file.mv('/home/zebromex3724/public_html/imagenes/' + file.name);
                  file.mv('/home/zebromex3724/public_html/imagenes/medianas/' + file.name);
                  const registro = await Blog.updateOne({ _id : req.params.id }, datos);
                  res.json(registro);
            }
            else
            {
                  console.log('soloDatos');
                  const soloDatos = {
                        titulo : datos.titulo,
                        resumen : datos.resumen,
                        contenido : datos.contenido
                  } 
                  console.log(soloDatos);
                  const registro = await Blog.updateOne({ _id : req.params.id }, soloDatos);
                  res.json(registro);
            }

      } catch (error){
            res.json({ mensaje : error });
      }
 

});

router.post('/', async (req, res)=>{

      const datos = req.body;

      try{
            const { file } = req.files;
            file.mv('/home/zebromex3724/public_html/imagenes/' + file.name);
            file.mv('/home/zebromex3724/public_html/imagenes/medianas/' + file.name);

            const registro = await Blog.insertMany([datos]);
            res.json(registro);
      } catch (error){
            res.json({ mensaje : error });
      }


      console.log("salio");
 

});


module.exports = router;