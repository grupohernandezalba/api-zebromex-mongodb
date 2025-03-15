const mongoose = require('mongoose');
const ProductoSchema = mongoose.Schema({
      nombre : {
            type : String,
            required : true
      },
      codigo : String
});

module.exports = mongoose.model('Producto',ProductoSchema);