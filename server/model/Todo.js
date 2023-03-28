import mongoose from "mongoose";

// here we will validate the data fro frontend 

const TodoSchema = new mongoose.Schema({
    data : {
        type:String,
        required : true
    },
    done:{
        type:Boolean,
        default: false
    },
    createdAt:{
        type : Date,
        default : Date.now
    }
})

const todo = mongoose.model('todo',TodoSchema)

export default todo;