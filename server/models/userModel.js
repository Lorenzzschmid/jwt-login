import mongoose from 'mongoose'; 

const { Schema, model } = mongoose; 

const userSchema = new Schema({

});

const User = model('User', userSchema)

export default User; 