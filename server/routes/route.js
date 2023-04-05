import express  from "express";
import { addTodo,getAllTodos,toggleTodoDone,updateTodo } from "../controller/Controller.js";
const Routes = express.Router();

Routes.post('/todos', addTodo)
Routes.get('/todos',getAllTodos )
Routes.get('/todos/:id',toggleTodoDone)
Routes.put('/todos/:id',updateTodo)

export default Routes;