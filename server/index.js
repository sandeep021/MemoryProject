import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"

import postRoutes from "./routes/post.js";

const app = express()
app.use("/post", postRoutes);//localhost:8000/post --- pe milega ab
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
const port = process.env.port || 8000;

const CONNECTION_URL = "mongodb+srv://sandeep021:Sandeep1@coc@cluster0.pzuzk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(port, () => 
    console.log(`Example app listening at http://localhost:${port}`)
  ))
.catch((error)=> console.log(error.message));

mongoose.set("useFindAndModify", false);

// app.get("/", function(req, res){
//     res.send("<h1>Hello</h1>");
// });