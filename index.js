const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const mongoDB = require("./Db");

mongoDB();

// CORS middleware
app.use(cors({
  origin: "http://localhost:3000/",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // enable set cookie
}));

app.use(express.json());
app.use('/api', require("./Routes/RegistrationUser"));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
