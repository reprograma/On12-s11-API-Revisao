const express = require("express");
const app = express();

const travelsRoutes = require("./routes/travelsRoutes");
const passengersRoutes = require("./routes/passengersRoutes");

app.use("/travels", travelsRoutes);
app.use("/passengers", passengersRoutes);

module.exports = app;