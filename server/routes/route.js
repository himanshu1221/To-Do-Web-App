import express  from "express";
import { addTodo,getAllTodos,toggleTodoDone,updateTodo,deleteTodo } from "../controller/Controller.js";
const Routes = express.Router();

Routes.post('/todos', addTodo)
Routes.get('/todos',getAllTodos )
Routes.get('/todos/:id',toggleTodoDone)
Routes.put('/todos/:id',updateTodo)
Routes.delete('/todos/:id',deleteTodo)

export default Routes;