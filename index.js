const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const postRoute = require("./source/routes/post.route");
const app = express();


app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use("/post", postRoute);



const ConnectionURL = "mongodb://localhost:27017/postlists";
mongoose
  .connect(ConnectionURL, { useUnifiedTopology: true, useNewUrlParser: true })
  

const connection = mongoose.connection;

connection.once("open",function(){
    console.log("connection established")
})

app.listen(5000,()=> console.log(`listening to port 5000`));
