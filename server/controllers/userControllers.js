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

    try {
        if (!password) {
            return res.status(400).json({message: 'Enter a valid password.'}); 
        }

        const user = await User.findOne({email}); 

        if (!user) {
            return res
            .status(400)
            .json({message: 'Enter a valid email address.'});
        }

        const checkPassword = await bcrypt.compare(password, user.password); 

        if (checkPassword) {
            console.log('Login successful ✅️');
            const token = await generateToken(user);

            return res
            .status(200)
            .cookie('jwt', token, {
                httpOnly: true,
                secure: false, // because no use of https
                sameSite: false
            })
            .json({message: "You're logged in. Welcome!"});
        } else {
            return res.status(400).json({ message: 'No access granted' });
        }
    } catch (error) {
        return res.status(400).json({message: error.message });
    }
 };
