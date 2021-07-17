const travels = require("../models/travels.json");

const getAllTravels = (req, res) => {
    res.status(200).json(travels);
};

const getTravelById = (req, res) => {
    const resquestId = req.params.id;
    const filteredTravel = utils.filterById(travels, resquestId);

    res.status(200).send(filteredTravel);
};


module.exports = {
    getAllTravels,
    getTravelById
}