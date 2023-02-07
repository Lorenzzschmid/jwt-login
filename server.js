import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv'; 
import mongoose from 'mongoose'; 

//router

dotenv.config(); 

const app = express();

app.use(express.json()); 

app.use(cors()); 

//Database connection

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`
    )
    .then(() => {
        console.log("Database connected! 😃");
    })
    .catch((error) => {
        console.log(error.message); 
        console.log("🤨")
    }); 

// Routers
app.use("/api/user", userRouter); 

const PORT = process.env.PORT;

app.listen(PORT, (req, res) => {
    console.log(`Listening to PORT: ${PORT}`);
});