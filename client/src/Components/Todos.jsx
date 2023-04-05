import { useEffect } from "react"
import { getAllTodos } from "../Redux/actions/index"
import { useDispatch,useSelector } from "react-redux"
import Todo from "./Todo";
import Tabs from "./Tabs";
import { ALL_TODO,DONE_TODO,ACTIVE_TODO } from "../Redux/actions/type";
export const Todos = () => {

    const dispatch = useDispatch();


    const todos = useSelector(state => state.todos) 
    const currentTab = useSelector(state => state.currentTab)

    useEffect(()=>{
        dispatch(getAllTodos())
    },[])

    const getTodos = () => {
        if(currentTab === ALL_TODO ){
            return todos
        }else if (currentTab === ACTIVE_TODO){
            return todos.filter(todos => !todos.done)
        }else if(currentTab === DONE_TODO){
            return todos.filter(todos => todos.done)
        }
    }

    return(
        <article>
            <div>
                <Tabs currentTab={currentTab}/>
            </div>
            <ul>
                {
                    getTodos().map(todo => (
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