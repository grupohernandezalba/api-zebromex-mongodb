const mongoose = require('mongoose');
const EmpresaSchema = mongoose.Schema({
      txt_nombre_emp : {
            type : String,
            required : true
      },
      txt_calle_emp : String,
      txt_numero_emp : Number
});

module.exports = mongoose.model('Empresa',EmpresaSchema);