import express from "express";

const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const date = new Date();
const today = date.getDay();

let weekday = false;

if ([1,2,3,4,5].includes(today)){
  weekday = true;
} 

app.get("/", (req, res) => {
  if (weekday) {
    res.render("index", { day: "weekday", advice: "work hard" });
  } else {
    res.render("index", { day: "weekend", advice: "have fun" });
  }
  
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
