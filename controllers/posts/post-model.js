import mongoose from 'mongoose';
import postSchema from './post-schema.js';
const postModel = mongoose
              .model('postModel', postSchema);
export default postModel;