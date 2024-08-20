const Vehicle = require('../models/Vehicle');

exports.createVehicle = async (req, res) => {
    const vehicle = new Vehicle(req.body);
    try {
        const savedVehicle = await vehicle.save();
        res.status(201).json(savedVehicle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.json(vehicles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteVehicles = async (req, res) => {
    try {
        const vehicle = await Vehicle.findByIdAndDelete(req.params.id);
        if (!vehicle) {
            return res.status(404).json({ message: 'Vehicle is Not Found' });
        }
        res.status(200).json({ message: 'Vehicle deleted successfully' })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getVehicleById = async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id);
        if (!vehicle) {
            return res.status(404).json({ message: 'Vehicle is Not Found' });
        }
        res.status(200).json(vehicle)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateVehicleById = async (req, res) => {
    try {
        const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators: true });
        if (!vehicle) {
            return res.status(404).json({ message: 'Vehicle is Not Found' });
        }
        res.status(200).json(vehicle)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};






