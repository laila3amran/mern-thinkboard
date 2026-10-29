import express from "express";// I used This syntax if i used module
import cors from "cors";
import dotenv from "dotenv" ;

//const express = require("express"); I used This syntax if i used common.js
import notesRoutes from "../src/routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config();
const PORT = process.env.PORT || 5001 ;

const app = express();

app.use(cors({
  origin:"http://localhost:5173",
  
}));
//middelware
app.use(express.json());
app.use(rateLimiter);

 // this middleware will parse JSON bodies req.body
//our simple custom middelware 
//app.use((req,res,next)=>{
//    console.log(`Req method is ${req.method}  and req URL is ${req.url}`);
 //   next();

//})
app.use("/api/notes",notesRoutes);

connectDB().then(()=>{
  app.listen(5001,()=>{
  console.log("Server started on the PORT: 5001");
});
}
  
)




// userName  lailaam207_db_user
// password   1hETgTGFMnEKpiGs
//mongodb+srv://<db_username>:<db_password>@thinkboard.mk2r0sg.mongodb.net/?appName=thinkBoard