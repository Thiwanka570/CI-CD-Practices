const mongoose = require('mongoose');

const timeSchema = new mongoose.Schema({
    schemaName:String,
    fromhours:{type:Number,required: true},
    tohours: { type: Number, required: true },
    totalforhour:{type: Number,required: true},
    createdAt:{ type: Date, required: true },
    createdBy:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    retired: { type: Boolean},
    retiredAt:{ type: Date, required: true },
    retiredBy:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('TimeSchema', timeSchema);
