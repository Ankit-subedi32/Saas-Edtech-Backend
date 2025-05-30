import app from "./src/app"
import {config } from "dotenv"

config()


//database connection import 
//import garyana vanya connection hudaina  or file execute hudaina  
import "./src/database/connection"

function startServer(){
    const port = process.env.PORT
    app.listen(port, () => {
        console.log(`Server has started at port ${port}`)
    })
}


startServer()