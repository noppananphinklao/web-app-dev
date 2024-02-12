import express from "express"

const port = 3000;
const app = express()

app.get("/", (req, res)=> {
    res.send("<h1>Hello, World!<h1/>")
});

app.get("/contacts", (req, res)=> {
    res.send("<h1>Contacts Page !<h1/>")
});

app.get("/aboutus", (req, res)=> {
    res.send("<h1>About Us Page!<h1/>")
});

app.listen(port, function(){
    console.log(`Server is running on Port ${port}`);
  });