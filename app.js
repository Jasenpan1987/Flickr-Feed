const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes");
const app = express();
const cors = require('cors');

app.use(bodyParser.json()); // use bodyParser for incomming request

app.use(cors({
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200
}));

route(app); // map to route

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("app is listening to port " + PORT);
});