import bcrypt from 'bcrypt'; 


export const findAllUsers = async (req, res) => {
    const users = await User.find(); 

    return res.status(200).json({ users })
};