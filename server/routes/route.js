import express  from "express";
import { addTodo,getAllTodos } from "../controller/Controller.js";
const Routes = express.Router();

Routes.post('/todos', addTodo)
Routes.get('/todos',getAllTodos )

export default Routes;