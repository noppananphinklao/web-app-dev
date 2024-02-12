import bodyParser from "body-parser";
//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express()
var authorized = false
app.use(bodyParser.urlencoded({extended:true}))
function passwordCheck(req, res, next) {
    const password = req.body["password"];
    if (password === "ILoveProgramming") {
        authorized = true;
    }
    next();
}
app.use(passwordCheck);



app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

app.post('/check', (req, res)=>{
    console.log(req.body)
    if (authorized) {
        res.sendFile(__dirname + "/public/secret.html")
    }
    else{
        // res.sendFile(__dirname + "/public/index.html")
        res.redirect('/')
    }
})

app.listen(port, function(){
    console.log(`Server is running on port: ${port}`)
})

