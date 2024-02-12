import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // res.send(`<h1>Enter your name below 🤣<h1/>`)
  res.render("index.ejs")
});
  
app.post("/submit", (req, res) => {
  let numberOfLetters = req.body['fName'].length + req.body['lName'].length
  res.render("index.ejs", {numberOfLetters: numberOfLetters});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
