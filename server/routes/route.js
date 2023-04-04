import express  from "express";
import { addTodo,getAllTodos,toggleTodoDone } from "../controller/Controller.js";
const Routes = express.Router();

Routes.post('/todos', addTodo)
Routes.get('/todos',getAllTodos )
Routes.get('/todos/:id',toggleTodoDone)

export default Routes;