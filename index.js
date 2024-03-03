const express = require("express");
const app = express();

// load the environment file in process
require("dotenv").config();
const PORT = process.env.PORT || 8000;

// middleware to parse the req body
app.use(express.json());

// import routes
const blogpost = require("./routes/blogpost");

// mount
app.use("/api/v2",blogpost);

app.listen( PORT,()=>{
    console.log(`server successfully started at ${PORT}`);
})

const connectDb = require("./config/database");
connectDb();

app.get( "/",(req,res)=>{
    res.send(`<h1>Welcome to our blogpost</h1>`);
})
