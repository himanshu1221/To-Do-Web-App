import axios from "axios"
import { ADDNEW_TODO, GETALL_TODO,TOGGLE_TODO,UPDATE_TODO,DELETE_TODO,TOGGLE_TAB } from "./type";
const API_URL = "http://localhost:8000";

export const addNewTodo = (data) => async(dispatch) =>{

    // Post is used to post a todo 

    try{

      const res = await axios.post(`${API_URL}/todos`,{ data })
      
      dispatch(
        { 
          type : ADDNEW_TODO,
          payload : res.data 
        }
      )
    }catch(error){
        console.log("error in adding new ToDo",error)
    }
}

export const getAllTodos = () => async (dispatch)=>{
  try{

    const res = await axios.get(`${API_URL}/todos`)
    
    dispatch(
      { 
        type : GETALL_TODO,
        payload : res.data 
      }
    )
  }catch(error){
      console.log("error while calling getalltodo api",error)
  }
}


export const toggleTodo = (id) => async (dispatch)=>{
  try{

    const res = await axios.get(`${API_URL}/todos/${id}`)
    
    dispatch(
      { 
        type : TOGGLE_TODO,
        payload : res.data 
      }
    )
  }catch(error){
      console.log("error while calling getalltodo api",error)
  }
}

export const updateTodo = (id,data) => async (dispatch)=>{
  try{

    const res = await axios.put(`${API_URL}/todos/${id}`,{data})
    
    dispatch(
      { 
        type : UPDATE_TODO,
        payload : res.data 
      }
    )
  }catch(error){
      console.log("error while calling Updatealltodo api",error)
  }
}

export const deleteTodo = (id) => async (dispatch)=>{
  try{

    const res = await axios.delete(`${API_URL}/todos/${id}`)
    
    dispatch(
      { 
        type : DELETE_TODO,
        payload : res.data 
      }
    )
  }catch(error){
      console.log("error while calling deletealltodo api",error)
  }
}

export const toggleTab = (tab) => async (dispatch) => {
  dispatch(
    {
      type:TOGGLE_TAB,
      selected:tab
    }
  )
}