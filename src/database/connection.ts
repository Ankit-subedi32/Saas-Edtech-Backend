

import { Sequelize } from "sequelize-typescript"

const sequelize = new Sequelize({
    database : process.env.DB_NAME,   //database ko name
    username :process.env.DB_USERNAME,    //database ko username, by default root hunxa 
    password : process.env.DB_PASSWORD,        //database ko password by default "" hunxa
    host : process.env.DB_HOST,     //database ko location "kaha xa vane kura ", localhost(merocomputer)
    dialect : "mysql",     // kun database use garna lako vanni
    port : Number(process.env.DB_PORT),
    models : [__dirname + `/models`] //current location + `/models`
})

sequelize.authenticate()
.then(()=> {
    console.log("Authenticate vayo")
})
.catch((err) =>{
    console.log("Error aayo " + err)
})

sequelize.sync({ force: true }).then(() => {
    console.log("Database synced successfully!");
}).catch(error => {
    console.error("Error syncing database:", error);
})




export default sequelize