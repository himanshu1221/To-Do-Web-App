import { createStore,combineReducers,applyMiddleware } from "redux"
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import todosReducer from "./reducers/todosReducer";
import { tabReducer } from "./reducers/tabReducer";

const reducer = combineReducers({
    todos: todosReducer,
    currentTab:tabReducer

});

const middleware = [thunk];

const store = createStore(

    //we can perform action items with the help of reducers we use combine reducer to combine multiple task CRUD
    
    //with the help of redux devtools extension we can connect with dev tools extension in the browser to store the data 

    //we are using thunk as a middle ware 

    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;