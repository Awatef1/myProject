
const mongoose =require ("mongoose")

const {Schema, model} = mongoose

const postsSchema = new Schema(
  {
    title: { type: String, required: true, unique: true, trim: true },
    date: { type: Number, required: true  },
    description: { type: String, required: true},
    image: { type: String, required: true, unique: true },
    
    
  },
);
postsSchema.index({ title: 'text' });
module.exports= Posts = model('Posts', postsSchema);


