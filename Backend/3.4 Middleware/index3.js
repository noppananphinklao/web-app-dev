import express from "express";

const app = express();
const port = 3000;

// app.use((req, res, next) =>{
//   console.log(`Request Method - ${req.method}`)
//   console.log(`URL - ${req.url}`)
//   console.log(`Other - ${req.hostname}`)
//   next()
// });

function logger(req, res, next) {
  console.log(`Request Method - ${req.method}`)
  console.log(`URL - ${req.url}`)
  console.log(`Other - ${req.hostname}`)
  next() 
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
