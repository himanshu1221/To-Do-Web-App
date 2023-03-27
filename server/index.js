import express from "express";
import connection from "./Database/DB.js";

const app = express();

const PORT = 8000;

connection();

app.listen(PORT,()=> console.log(`Server Initialised on port ${PORT}`))