import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    seller: {
        type: String
    },
    sellerid: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});