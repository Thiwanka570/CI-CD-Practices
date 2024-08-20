const express = require('express');
const router=express.Router();
const vehicleController=require('../controllers/VehicleController');

router.post('/', vehicleController.createVehicle);
router.get('/', vehicleController.getAllVehicles);
router.get('/:id', vehicleController.getVehicleById);
router.put('/:id', vehicleController.updateVehicleById);
router.delete('/:id', vehicleController.deleteVehicles);

module.exports = router;