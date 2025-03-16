
import mongoose from 'mongoose';

const BlogSchema = mongoose.Schema({
      titulo : {
            type : String,
            required : true
      },
      resumen : String,
      contenido : String,
      imagen : String
});

const Blog = mongoose.model('Blog', BlogSchema);

export default Blog;