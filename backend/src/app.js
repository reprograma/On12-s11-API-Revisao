const express = require("express");
const app = express();
const cors =require("cors");

const routes = require("./routes/travelsRoutes");

app.use(cors());
app.use(express.json());//para parceamento

app.use("/", routes);


module.exports = app;