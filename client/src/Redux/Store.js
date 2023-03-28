import { createStore,combineReducers } from "redux"

import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
    todos: todosReducer
});
const store = createStore(

    //we can perform action items with the help of reducers we use combine reducer to combine multiple task
    //with the help of redux devtools extension we can connect with dev tools extension in the browser to store the data 
    //we are using thunk as a middle  ware 

    reducer,
    composeWithDevTools()



)