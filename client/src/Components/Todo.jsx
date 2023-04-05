import { useState } from "react";
import { toggleTodo,updateTodo } from "../Redux/actions"
import { useDispatch } from "react-redux"

const Todo = ({ todo }) => {

    const[editing,setEditing] = useState(false);
    const [text,setText] = useState(todo.data)
    const dispatch = useDispatch();
    const onFormSubmit = (e) => {
        e.preventDefault()
        setEditing(prevstate => !prevstate)
        dispatch(updateTodo(todo._id,text))
    }

    return(
        <div>
            <li className="task" 
            onClick={()=> dispatch(toggleTodo(todo._id))}
            style={{
                textDecoration: todo.done ? 'line-through' : "",
                color: todo.done ? '#bdc3c7' : '#34495e'
            }}
            >
                <span style={{display: editing ? "inline" : "none"}}>{todo.data}</span>
                <form
                style={{display: editing?"none":""}}
                onSubmit={onFormSubmit}
                >
                    <input type="text" 
                    value={text}
                    className="edit-todo"
                    onChange={(e)=> setText(e.target.value)}
                    />
                </form>
                <span className="icon" onClick={()=>dispatch(deleteTodo(todo._id))}>
                    <i className="fas fa-trash"/>
                </span>
                <span className="icon" onClick={()=>setEditing(prevstate => !prevstate)}>
                    <i className="fas fa-pen"/>
                </span>
            </li>
        </div>
    )
}

export default Todo;