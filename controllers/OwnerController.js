const Owner = require('../models/Owner');

// Create a new Owner
exports.createOwner = async (req, res) => {
    const owner = new Owner(req.body);
    try {
        const savedOwner = await owner.save();
        res.status(201).json(savedOwner);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all Owners
exports.getAllOwners = async (req, res) => {
    try {
        const owners = await Owner.find({ retired: { $ne: true } })
            .populate('vehicle')
            .populate('createdBy')
            .populate('retiredBy')
            .exec();

        res.json(owners);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete an Owner by ID
exports.deleteOwnerById = async (req, res) => {
    try {
        const owner = await Owner.findByIdAndDelete(req.params.id);
        if (!owner) {
            return res.status(404).json({ message: 'Owner not found' });
        }
        res.status(200).json({ message: 'Owner deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get an Owner by ID
exports.getOwnerById = async (req, res) => {
    try {
        const owner = await Owner.findById(req.params.id)
            .populate('vehicle')
            .populate('createdBy')
            .populate('retiredBy')
            .exec();
        
        if (!owner) {
            return res.status(404).json({ message: 'Owner not found' });
        }
        res.status(200).json(owner);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an Owner by ID
exports.updateOwnerById = async (req, res) => {
    try {
        const owner = await Owner.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!owner) {
            return res.status(404).json({ message: 'Owner not found' });
        }
        res.status(200).json(owner);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
