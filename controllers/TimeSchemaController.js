const TimeSchema = require('../models/TimeSchema');

exports.createTimeSchema = async (req, res) => {
    const timeSchema = new TimeSchema(req.body);
    try {
        const savedTimeSchema = await TimeSchema.save(timeSchema);
        res.status(201).json(savedTimeSchema);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllTimeSchemas = async (req, res) => {
    try {
        const TimeSchemas = await TimeSchema.find({ retired: { $ne: true } }) 
            .populate('createdBy')
            .populate('retiredBy')
            .exec();
        
        res.json(TimeSchemas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteTimeSchema = async (req, res) => {
    try {
        const timeSchema = await TimeSchema.findByIdAndDelete(req.params.id);
        if (!timeSchema) {
            return res.status(404).json({ message: 'TimeSchema is Not Found' });
        }
        res.status(200).json({ message: 'TimeSchema deleted successfully' })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getTimeSchemaId = async (req, res) => {
    try {
        const timeSchema = await TimeSchema.findById(req.params.id);
        if (!timeSchema) {
            return res.status(404).json({ message: 'TimeSchema is Not Found' });
        }
        res.status(200).json(timeSchema)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateTimeSchemaById = async (req, res) => {
    try {
        const timeSchema = await TimeSchema.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators: true });
        if (!timeSchema) {
            return res.status(404).json({ message: 'TimeSchema is Not Found' });
        }
        res.status(200).json(timeSchema)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};






