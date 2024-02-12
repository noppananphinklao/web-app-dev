import express from "express";

const port = 6343;
const app = express();

app.get("/", (req, res)=>{
  res.send("Hello, World!");
});

app.listen(port, function(){
  console.log(`Server is running on Port ${port}`);
});