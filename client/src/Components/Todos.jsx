import { useEffect } from "react"
import { getAllTodos } from "../Redux/actions/index"
import { useDispatch,useSelector } from "react-redux"
import Todo from "./Todo";

export const Todos = () => {

    const dispatch = useDispatch();


    const todos = useSelector(state => state.todos) 

    useEffect(()=>{
        dispatch(getAllTodos())
    },[])

    return(
        <article>
            <ul>
                {
                    todos.map(todo => (
                        <Todo
                            key = {todo._id}
                            todo = {todo}
                        />
                    ))
                }
            </ul>
        </article>
    )
}

export default Todos