import express, { application } from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
import { connect_to_dataBase } from "./database/connect.js";
import { User_Login_Route } from "./Routes/LoginRoute.js";

// !CONFIGURE ALL THE FILES
const app= express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
dotenv.config()


// !LISTEN TO PORT
const port =process.env.PORT

// ! connect to the database before starting the server

connect_to_dataBase().then(()=>{
console.log("database was connected")
}).then(()=>{
    app.listen(port,()=>{
        console.log(`app listening at http://localhost:${port} `)
    })
})
// !WE USE THE ROUTES HERE FOR BOTH REGISTRATION AND LOGIN
app.use(User_Login_Route)
