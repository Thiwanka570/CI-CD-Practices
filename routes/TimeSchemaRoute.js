const express = require('express');
const router=express.Router();
const timeSchemaController=require('../controllers/TimeSchemaController');

router.post('/', timeSchemaController.createTimeSchema);
router.get('/', timeSchemaController.getAllTimeSchemas);
router.get('/:id', timeSchemaController.getTimeSchemaId);
router.put('/:id', timeSchemaController.updateTimeSchemaById);
router.delete('/:id', timeSchemaController.updateTimeSchemaById);

module.exports = router;