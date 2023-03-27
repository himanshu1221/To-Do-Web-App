import { useState } from "react"


// Redux is a databse for frontend 

const ToDoForm = () => {

    // we are using state to store the value of input field  

    const[text,setText] = useState("")

    // we use onformsubmit to handle page refresh 

    const onFormSubmit = () =>{
        
    }

    // we used onInputChange to find out the value written inn input field 

    const onInputChange = (e) => {
        // console.log(e.target.value)
        setText(e.target.value)
    }


    return(
        <form action="submit" className="form" onSubmit={onFormSubmit}>
            <input type="text" placeholder="Enter your todo...." className="input" onChange={onInputChange}/>
        </form>
    )
}

export default ToDoForm;