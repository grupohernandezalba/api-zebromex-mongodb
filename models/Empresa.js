
import mongoose from 'mongoose';

const EmpresaSchema = mongoose.Schema({
      txt_nombre_emp : {
            type : String,
            required : true
      },
      txt_calle_emp : String,
      txt_numero_emp : Number
});

const Empresa = mongoose.model('Empresa', EmpresaSchema);

export default Empresa;