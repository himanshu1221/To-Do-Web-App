import { useEffect } from "react"
import { getAllTodos } from "../Redux/actions/index"
import { useDispatch } from "react-redux"


export const Todos = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllTodos())
    },[])

    return(
        <div>
            hello from Todo
        </div>
    )
}

export default Todos