const express = require("express");
const router = express.Router();

const controllerTravels = require("../controllers/travelsControllers");
const controllerPassengers = require("../controllers/passengersControllers");

router.get("/travels", controllerTravels.getAllTravels);
router.get("/travels/:id", controllerTravels.getTravelById);
router.get("/travels/capacidade", controllerTravels.getAllTravelsOrderedByCapacity);
router.get("/travels/duracao", controllerTravels.getAllTravelsOrderedByDurationPrediction);
router.get("/travels/duracao", controllerTravels.getAllTravelsOrderedByStops);

router.post("/travels/:id/passenger/create", controllerTravels.createPerson);

router.put("/travels/:id", controllerTravels.editDriver);

router.patch("/travels/:id", controllerTravels.replaceDriver);

router.delete("/passenger/:id/deleteperson", controllerTravels.deletePerson);
router.delete("/passenger/:id/deletetravel", controllerTravels.deleteTravel);

//Passenger
router.get('/passenger', controllerPassengers.getAllPassenger);

router.put('/passenger/:id', controllerPassengers.replacePassenger);



module.exports= router;