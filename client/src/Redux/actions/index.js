import axios from "axios"
import { ADDNEW_TODO } from "./type";
const API_URL = "http://localhost:8000";

export const addNewTodo = (data) => async(dispatch) =>{

    // Post is used to post a todo 
    try{
      const res = await axios.post(`${API_URL}/todos`,{ data })
      dispatch({ type : ADDNEW_TODO , payload : res.data })
    }catch(error){
        console.log("error in adding new ToDo",error)
    }
}


