const express = require('express');
const router=express.Router();
const ownerCOntroller=require('../controllers/OwnerController');

router.post('/', ownerCOntroller.createOwner);
router.get('/', ownerCOntroller.getAllOwners);
router.get('/:id', ownerCOntroller.getOwnerById);
router.put('/:id', ownerCOntroller.updateOwnerById);
router.delete('/:id', ownerCOntroller.deleteOwnerById);

module.exports = router;