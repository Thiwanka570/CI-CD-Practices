const express = require('express');
const router=express.Router();
const billController=require('../controllers/BillController');

router.post('/', billController.createBill);
router.get('/', billController.getAllBills);
router.get('/:id', billController.getBillById);
router.put('/:id', billController.updateBillById);
router.delete('/:id', billController.deleteBillById);

module.exports = router;