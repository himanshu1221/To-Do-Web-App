import express  from "express";

const Routes = express.Router();

Routes.post('/todos',(request,response)=>{
    console.log(request.body);
})

export default Routes;