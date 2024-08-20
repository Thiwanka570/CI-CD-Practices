const Park = require('../models/Park');

// Create a new Park
exports.createPark = async (req, res) => {
    const park = new Park(req.body);
    try {
        const savedPark = await park.save();
        res.status(201).json(savedPark);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all Parks
exports.getAllParks = async (req, res) => {
    try {
        const parks = await Park.find({ retired: { $ne: true } })
            .populate('owner')
            .populate('vehicle')
            .populate('timeSchema')
            .populate('createdBy')
            .populate('retiredBy')
            .exec();

        res.json(parks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a Park by ID
exports.getParkById = async (req, res) => {
    try {
        const park = await Park.findById(req.params.id)
            .populate('owner')
            .populate('vehicle')
            .populate('timeSchema')
            .populate('createdBy')
            .populate('retiredBy')
            .exec();

        if (!park) {
            return res.status(404).json({ message: 'Park not found' });
        }
        res.status(200).json(park);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a Park by ID
exports.updateParkById = async (req, res) => {
    try {
        const park = await Park.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!park) {
            return res.status(404).json({ message: 'Park not found' });
        }
        res.status(200).json(park);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a Park by ID
exports.deleteParkById = async (req, res) => {
    try {
        const park = await Park.findByIdAndDelete(req.params.id);
        if (!park) {
            return res.status(404).json({ message: 'Park not found' });
        }
        res.status(200).json({ message: 'Park deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
