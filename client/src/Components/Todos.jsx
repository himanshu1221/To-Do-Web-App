import { useEffect } from "react"
import { getAllTodos } from "../Redux/actions/index"
import { useDispatch,useSelector } from "react-redux"
import Todo from "./Todo";
import Tabs from "./Tabs";

export const Todos = () => {

    const dispatch = useDispatch();


    const todos = useSelector(state => state.todos) 
    const currentTab = useSelector(state => state.currentTab)

    useEffect(()=>{
        dispatch(getAllTodos())
    },[])

    return(
        <article>
            <div>
                <Tabs currentTab={currentTab}/>
            </div>
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