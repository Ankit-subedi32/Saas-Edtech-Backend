



/*

REGISTER/SIGNUP
incoming data  --> username, email, password 
processing/checking --> email valid, compulsory data aaaunu paryo 
db--> table--> query --> table ma insert/read/delete/update

LOGIN/SIGNIN
LOGOUT
FORGOT PASSWORD 
RESET PASSWORD/ OTP

*/

import {Request,Response} from "express"
import User from "../../../database/models/userModel"
import bcrypt from "bcrypt"

// json data --> req.body // username,email,password 
// files --> req.file // files
// const registerUser = async (req:Request,res:Response)=>{
// //    const username = req.body.username
// //    const password = req.body.password
// //    const email = req.body.email
//     // incoming data --> accept
//    const {username,password,email} = req.body
//    if(!username || !password || !email){
//      res.status(400).json({
//         message : "Please provide username, password, email"
//     })
//     return
//    }
//     // insert into Users table 
//     await User.create({
//         username :username, 
//         password : password, 
//         email : email
//     })
//     res.status(200).json({
//         message : "User registered successfully"
//     })
   

// } // function 
// BOLA Attack


/**
 login flow :
 email/username and password (basic)
email and password(data accept )--> validaition -->
//first check email exist or not (verify) --> yes --> check password --> milyo vanya token(jsonwebtoken) jeneraton garn a parxa -->
--> no --> not registered


 google login ,facebook ,github(auth)
 email login (SSO)

 */


class AuthController{
   static async registerUser(req:Request,res:Response){
    if(req.body == undefined){
        console.log("triggereed")
        res.status(400).json({
            message  : "No data was sent!!"
        })
        return
    }
    const {username,password,email} = req.body
    if(!username || !password || !email){
      res.status(400).json({
         message : "Please provide username, password, email"
     })
     return
    }
//    const [data] =  await User.findAll({
//         where : {
//             email
//         }
//     })
//     if(data){
//         // already exists with that email 
//     }
     // insert into Users table 
     await User.create({
         username :username, 
         password : bcrypt.hashSync(password,12), 
         email : email
     })
     res.status(201).json({
         message : "User registered successfully"
     })
   }

   async loginUser(req:Request,res:Response){
    const {email,password} = req.body
    if(!email || !password) {
        res.status(400).json({
            message : "Please provide email,password"
        })
        return 
    }

    //check if email exit or not in our table 
    const data = await User.findAll({
        where : {
                email
        }
    })
    //seletc * from User where email ="ankit@gmail.com" AND age == 23
    if(data.length == 0 ){
        res.status(404).json({
            message : "Not registered"
        })

    }
    else{
        //check password , ankit123 (hanyako password ) --> hash conversion --> fsdkjjshguy
        //compare (plain passsword) user bata aako password ,hashed password register huda
        const isPasswordMatch = bcrypt.compareSync(password,data[0].password)
        if(isPasswordMatch){
            //login vayo ,token generate garnu paryo
            

        }else {
            res.status(403).json({
                message : " Invalid Email or passsword "
            })
        }
    }
   }
}

export default AuthController


// export  {registerUser}