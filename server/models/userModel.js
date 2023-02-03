import mongoose from 'mongoose'; 

const { Schema, model } = mongoose; 

const userSchema = new Schema({
    firstName: {
        type: String, 
        required: true 
    }, 
    lastName: {
        type: String, 
        required: true
    }, 
    email: {
        type: String, 
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    }, 
    dateCreated: {
        type: Date,
        default: Date.now
    },
});

const User = model('User', userSchema)

export default User; 