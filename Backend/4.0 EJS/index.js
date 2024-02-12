import ejs from "ejs"
import express from "express"

const port = 3000;
const app = express()
var dayType = '';
var advice = '';

function checkDay(req, res, next) {
    const day = new Date().getDay(); 
    if (day in [0, 6]){
        dayType = "a weekend"
        advice = "it's time to have fun!"
    } 
    else {
        dayType = "a weekday"
        advice = "it's time to work hard!"       
    }  
    next()
}

app.use(checkDay)
app.get('/', function(req, res){

    res.render("index.ejs", {
        dayType: dayType,
        advice: advice
    })

    // if (day in [0, 6]){
    //     res.send(`<h1>Hey! It's a weekend, it's time to have fun!<h1/>`)
    // }
    // else {
    //     res.send(`<h1>Hey! It's a weekend, it's time to work hard!<h1/>`)
    // }
})

app.listen(port, function(){
    console.log(`We're running on port -> ${port}`)
})