const express = require('express');
const router=express.Router();
const parkingPointController=require('../controllers/ParkingPointController');

router.post('/', parkingPointController.createParkingPoint);
router.get('/', parkingPointController.getAllParkingPoints);
router.get('/:id', parkingPointController.getParkingPointById);
router.put('/:id', parkingPointController.updateParkingPointById);
router.delete('/:id', parkingPointController.deleteParkingPointById);

module.exports = router;