import express from 'express';

const app=express();
const port=3000;

app.get('/', (req,res)=>{
  res.send("<h1>Hello</h1>");
});

app.get('/contact', (req,res)=>{
  res.send("<h1>Contact Me</h1><p>You can contact me via email saramululo@gmail.com</p>");
});

app.get('/about', (req,res)=>{
  res.send("<h1>About Me</h1><p>Hi, I'm Sara a web developer specialized in React and now learning node+express to be able develop full stack web apps</p>>");
});

app.listen(3000,()=>
console.log(`Server running at port ${port}`))