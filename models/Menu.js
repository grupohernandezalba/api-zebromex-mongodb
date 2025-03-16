
import mongoose from 'mongoose';

const MenuSchema = mongoose.Schema({
      txt_nombre_men : {
            type : String,
            required : true
      },
      int_padre_men : Number,
      int_orden_men : Number,
      txt_icono_men : String,
      pk_clave_men : String
});
// Exportamos el modelo para usarlo en otros ficheros
const Menu = mongoose.model('Menu', MenuSchema);

export default Menu;