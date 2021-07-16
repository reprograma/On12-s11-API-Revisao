const travels = require("../models/travels.json");
const utils = require("../utils/travelsUtils");

const getAllTravels = (req, res) => {
    res.status(200).json(travels);
};

module.exports = {
    getAllTravels
}