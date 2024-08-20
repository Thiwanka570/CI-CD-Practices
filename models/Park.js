const mongoose = require('mongoose');

const parkSchema = new mongoose.Schema({
    from: { type: Date, required: true },
    to: { type: Date, required: true },
    timeSchema:[{type: mongoose.Schema.Types.ObjectId, ref: 'TimeSchema'}],
    owner: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' }],
    vehicle: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }],
    createdAt:{ type: Date, required: true },
    createdBy:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    retired: { type: Boolean},
    retiredAt:{ type: Date, required: true },
    retiredBy:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Park', parkSchema);
