const express = require("express");
const app = express();

const travelsRoutes = require("./routes/travelsRoutes");
const passangersRoutes = require("./routes/passengersRoutes");

app.use("/travels", travelsRoutes);
app.use("/passangers", passangersRoutes);

module.exports = app;