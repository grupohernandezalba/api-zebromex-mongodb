const mongoose = require('mongoose');
const BlogSchema = mongoose.Schema({
      titulo : {
            type : String,
            required : true
      },
      resumen : String,
      contenido : String,
      imagen : String
});

module.exports = mongoose.model('Blog',BlogSchema);