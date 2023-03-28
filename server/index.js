import express from "express";
import connection from "./Database/DB.js";
import cors from "cors"
import Routes from "./routes/route.js";
import bodyParser from "body-parser";

const app = express();

app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Routes)
const PORT = 8000;

connection();

app.listen(PORT,()=> console.log(`Server Initialised on port ${PORT}`))