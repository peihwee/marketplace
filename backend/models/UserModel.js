import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    name: 
    {
        type: String,
        required: true
    },
    email: 
    {
        type: String,
        required: true
    },
    password: 
    {
        type: String,
        required: true
    },
    isAdmin:
    {
        type: String,
        default: false,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});