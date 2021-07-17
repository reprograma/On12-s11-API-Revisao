const express = require("express");
const router = express.Router();

const controller = require("../controllers/travelsControllers");

router.get("/travels", controller.getAllTravels);
router.get("/travels/:id", controller.getTravelById);


router.post("/travels/:id/passenger/create", controller.createPerson);

router.delete("/passenger/:id/delete", controller.deletePerson);

module.exports = router;