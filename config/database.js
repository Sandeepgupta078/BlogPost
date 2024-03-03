const mongoose = require("mongoose");

require("dotenv").config();

const connectdb = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then( ()=>{
        console.log("database connection successfull");
    })
    .catch((err)=>{
        console.error(err.message);
        console.log("Isseus in database connection");
        process.exit(1);
    })
}

module.exports = connectdb;