const mongoose = require('mongoose');
const PaginaSchema = mongoose.Schema({
      contenido : {
            type : String,
            required : true
      },
      liga : String
});

module.exports = mongoose.model('Pagina',PaginaSchema);