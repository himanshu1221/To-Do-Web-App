import  * as actionTypes from '../actions/type'


const todosReducer = (state = [] , action) => {

    switch(action.type){
        case actionTypes.ADDNEW_TODO:
            return[action.payload,...state]

        case actionTypes.GETALL_TODO:
            return action.payload

        case actionTypes.TOGGLE_TODO:
            return state.map(todo =>(
                todo._id === action.payload._id ?  {...todo,done:!todo.done} : todo
            ))        

        default:
            return state;
    }

}

export default todosReducer;