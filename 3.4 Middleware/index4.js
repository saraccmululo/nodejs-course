import express from "express";
import bodyParser from "body-parser";
import {dirname} from 'path';
import { fileURLToPath } from "url";

const __dirname=dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let bandName='';

app.use(bodyParser.urlencoded({extended:true}));//middleware to get the form data and show on the screen.

app.get("/", (req,res)=> {
  res.sendFile(__dirname + "/public/index.html")
})//renders the index file UI to the screen

app.post("/submit", (req,res)=>{
  const { street, pet } = req.body;
  res.send(`<h1>Your band name is:</h1><h2>${street} ${pet}</h2>`)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
