const travels = require("../models/travels.json");
const passengers = require("../models/passengers.json");
const fs = require("fs");
const utils = require("../utils/travelsUtils");

const getAllPassengers = (req, res) => {
    res.status(200).send(passengers);
};

module.exports = {
    getAllPassengers
};