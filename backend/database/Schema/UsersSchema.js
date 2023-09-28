import mongoose,{Schema} from "mongoose";

const usersSchema=new Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String,
    secret_key:String,
},{
    collection:"users"
})
export const usersCollection=mongoose.model("users",usersSchema)