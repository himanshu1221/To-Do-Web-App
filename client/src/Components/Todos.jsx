import { useEffect } from "react"
import { deleteTodo, getAllTodos } from "../Redux/actions/index"
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

    const removeDoneTodos = () => {
        todos.forEach(({done,_id})=>{
            if (done){
                dispatch(deleteTodo(_id))
            }


        })
    }

    return(
        <article>
            <div>
                <Tabs currentTab={currentTab}/>
                {
                    todos.some(todo => todo.done) ?(
                        <button
                        onClick={removeDoneTodos}
                        className="button clear"
                        >Remove Done Todos</button>
                    ) : null
                }
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