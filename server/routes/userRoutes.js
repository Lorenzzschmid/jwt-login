import express from 'express'; 

//controller
import {
    deleteUser,
    findAllUsers, 
    loginUser,
    logout,
    registerUser,
    updateUsername,
} from '../controllers/userControllers.js';

//middleware
import { validateUser, sanitizeUser } from '../middlewares/userValidation.js'; 

const router = express.Router(); 

router.get('/', findAllUsers); 

router.post('/create', validateUser, sanitizeUser, registerUser); 

router.post('/login', loginUser); 

router.get('/logout', logout); 

router.patch('/update/:id', updateUsername); 

router.delete('/delete/:id', deleteUser); 

export default router; 

