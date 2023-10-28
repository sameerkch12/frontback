const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const mongoDB = require("./Db")

mongoDB();

//ye banana he padt hai jab frontend port 3000 se backend port 5000 pe data accept krna hota haii to
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://653cf774aa0d3408c8ebe57b--poetic-strudel-a3a103.netlify.app");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json())
app.use('/api', require("./Routes/RegistrationUser"));




//nomal express start
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})