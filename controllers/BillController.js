const Bill = require('../models/Bill');

// Create a new Bill
exports.createBill = async (req, res) => {
    const bill = new Bill(req.body);
    try {
        const savedBill = await bill.save();
        res.status(201).json(savedBill);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all Bills
exports.getAllBills = async (req, res) => {
    try {
        const bills = await Bill.find({ retired: { $ne: true } })
            .populate('park')
            .populate('createdBy')
            .populate('retiredBy')
            .exec();

        res.json(bills);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a Bill by ID
exports.getBillById = async (req, res) => {
    try {
        const bill = await Bill.findById(req.params.id)
            .populate('park')
            .populate('createdBy')
            .populate('retiredBy')
            .exec();

        if (!bill) {
            return res.status(404).json({ message: 'Bill not found' });
        }
        res.status(200).json(bill);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a Bill by ID
exports.updateBillById = async (req, res) => {
    try {
        const bill = await Bill.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!bill) {
            return res.status(404).json({ message: 'Bill not found' });
        }
        res.status(200).json(bill);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a Bill by ID
exports.deleteBillById = async (req, res) => {
    try {
        const bill = await Bill.findByIdAndDelete(req.params.id);
        if (!bill) {
            return res.status(404).json({ message: 'Bill not found' });
        }
        res.status(200).json({ message: 'Bill deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
