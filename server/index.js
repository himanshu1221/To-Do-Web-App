import express from "express";
import connection from "./Database/DB.js";
import cors from "cors"
import Routes from "./routes/route.js";

const app = express();

app.use(cors())
app.use('/',Routes)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const PORT = 8000;

connection();

app.listen(PORT,()=> console.log(`Server Initialised on port ${PORT}`))