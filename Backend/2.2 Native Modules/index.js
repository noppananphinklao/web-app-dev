const fs = require("fs");

// fs.writeFile("self-message.txt", "Hello from NOPPANAN!", (err) => {
//     if (err) throw err;
//         console.log("The file has been saved!.")
// })


fs.readFile("self-message.txt", "utf8", (err, data)=> {
    if(err) throw err;
    console.log(data)
});