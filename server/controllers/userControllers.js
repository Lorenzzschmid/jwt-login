import bcrypt from 'bcrypt'; 
import User from '../models/userModel.js'


export const findAllUsers = async (req, res) => {
    const users = await User.find(); 

    return res.status(200).json({ users })
};
 export const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, userName, email, password } = req.body; 
        const hashedPassword = await bcrypt.hash(password, 10); 
        const userUsernameExists = await User.findOne({userName}); 
        const userEmailExists = await User.findOne({email}); 

        if(userEmailExists) {
            return res.status(400).json({ message: "This Email is already taken"}); 
        } else if (userUsernameExists) {
            return res.status(400).json({ message: "Username already taken"}); 
        }
        
        const createdUser = await User.create({
            firstName,
            lastName,
            email,
            userName,
            password: hashedPassword
        }); 
        console.log('Success! User registered 👌️'); 

        return res
        .status(200)
        .json({ message: 'Created successfully', createdUser });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
 };

 export const loginUser = async (req, res) => {
    const { email, password} = req.body; 

    
 }
