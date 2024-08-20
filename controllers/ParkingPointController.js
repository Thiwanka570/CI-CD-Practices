const ParkingPoint = require('../models/ParkingPoint');

// Create a new ParkingPoint
exports.createParkingPoint = async (req, res) => {
    const parkingPoint = new ParkingPoint(req.body);
    try {
        const savedParkingPoint = await parkingPoint.save();
        res.status(201).json(savedParkingPoint);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all ParkingPoints
exports.getAllParkingPoints = async (req, res) => {
    try {
        const parkingPoints = await ParkingPoint.find({ retired: { $ne: true } })
            .populate('createdBy')
            .populate('retiredBy')
            .exec();

        res.json(parkingPoints);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a ParkingPoint by ID
exports.getParkingPointById = async (req, res) => {
    try {
        const parkingPoint = await ParkingPoint.findById(req.params.id)
            .populate('createdBy')
            .populate('retiredBy')
            .exec();

        if (!parkingPoint) {
            return res.status(404).json({ message: 'ParkingPoint not found' });
        }
        res.status(200).json(parkingPoint);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a ParkingPoint by ID
exports.updateParkingPointById = async (req, res) => {
    try {
        const parkingPoint = await ParkingPoint.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!parkingPoint) {
            return res.status(404).json({ message: 'ParkingPoint not found' });
        }
        res.status(200).json(parkingPoint);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a ParkingPoint by ID
exports.deleteParkingPointById = async (req, res) => {
    try {
        const parkingPoint = await ParkingPoint.findByIdAndDelete(req.params.id);
        if (!parkingPoint) {
            return res.status(404).json({ message: 'ParkingPoint not found' });
        }
        res.status(200).json({ message: 'ParkingPoint deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
