import express, { application } from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"

// !CONFIGURE ALL THE FILES
const app= express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors)
dotenv.config()


// !LISTEN TO PORT
const port =process.env.PORT
app.listen(port,()=>{
    console.log(`app listening at http://localhost:${port} `)
})