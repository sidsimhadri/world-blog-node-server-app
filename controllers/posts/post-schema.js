import mongoose from 'mongoose';

const schema = mongoose.Schema({
    title: String,
    content: String,
    location: {
        type: {
            type: String, 
            enum: ['Point'],
            default: 'Point'
        },
        coordinates: {
            type: [Number], 
            required: true
        }
    },
    time: Date,
}, { collection: 'posts' });


schema.index({ location: '2dsphere' });

export default schema;
