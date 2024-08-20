const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
    totaltime: { type: Number, required: true }, 
    total: { type: Number, required: true },
    park: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Park' }],
    createdAt:{ type: Date, required: true },
    createdBy:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    retired: { type: Boolean},
    retiredAt:{ type: Date, required: true },
    retiredBy:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Bill', billSchema);

