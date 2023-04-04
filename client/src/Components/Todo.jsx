



const Todo = ({ todo }) => {
    return(
        <div>
            <li>
                <span>{todo.data}</span>
                <span>
                    <i className="fas fa-trash"/>
                </span>
                <span>
                    <i className="fas fa-pen"/>
                </span>
            </li>
        </div>
    )
}

export default Todo;