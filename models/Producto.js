
import mongoose from 'mongoose';

const ProductoSchema = mongoose.Schema({
      nombre : {
            type : String,
            required : true
      },
      codigo : String
});

const Producto = mongoose.model('Producto', ProductoSchema);

export default Producto;