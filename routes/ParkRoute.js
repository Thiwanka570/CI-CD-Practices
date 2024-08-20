const express = require('express');
const router=express.Router();
const parkController=require('../controllers/ParkController');

router.post('/', parkController.createPark);
router.get('/', parkController.getAllParks);
// router.get('/:id', parkController.ge);
router.put('/:id', parkController.updateParkById);
router.delete('/:id', parkController.deleteParkById);

module.exports = router;