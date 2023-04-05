import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

// create a .env file with the help of .env.sample 

const DB_URL = process.env.DB_URL

const connection = () => {

    const MONGODB_URI = `${DB_URL}`;

    // this is used to connect mongodb // old parser will be depriciated we will soon use new parser

    mongoose.connect(MONGODB_URI , { useNewUrlParser : true });

    mongoose.connection.on('connected',()=>{
        console.log("database connected succefully")
    })

    mongoose.connection.on("disconnected",()=>{
        console.log("database disconnected")
    })

    mongoose.connection.on('error',(error)=>{
        console.log("error while connecting with database",error.message)
    })
}

export default connection;