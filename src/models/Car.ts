import { Schema, model } from 'mongoose'

export const Car = model('Car', new Schema({
    id: {
        type: String,
        required: true
    },
    user_id:{
        type: String,
        required: true 
    },
    licensePlate: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    isSync: {
        type: Boolean,
        required: true
    },
    created: {
        type: String,
        required: true
    },
}));

