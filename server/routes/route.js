import express  from "express";
import { addTodo } from "../controller/Controller.js";
const Routes = express.Router();

Routes.post('/todos', addTodo)

export default Routes;