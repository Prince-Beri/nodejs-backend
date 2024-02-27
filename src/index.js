import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
});
// right way to connect DB.Where our connectDB function is separately present in ./db/index.js file. 
connectDB();


/* Not so good practice.

import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";

const app = express();

(async () => {
    try{
        await mongoose.connect(`${process.env.MONGOBD_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("error: ",error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on ${process.env.PORT}`);
        });

    }catch(error){
        console.error("ERROR: ", error);
        throw error;
    }
})()

*/