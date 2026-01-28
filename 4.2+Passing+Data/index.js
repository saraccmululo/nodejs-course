import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const sumName = (first, last) => {
  const fName = first;
  const lName = last;
  return fName.length + lName.length;
};

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/submit", (req, res) => {
  const totalSum = req.body.fName.length || "" + req.body.lName.length || "";
  res.render("index",
    {result: `Your name has ${totalSum} letters.`})
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
