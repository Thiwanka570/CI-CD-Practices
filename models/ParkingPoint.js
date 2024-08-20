const mongoose = require('mongoose');

const parkingPoint = new mongoose.Schema({
    name:{type:String,required:true},
    code:{type:String,required:true},
    createdAt:{ type: Date, required: true },
    createdBy:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    retired: { type: Boolean},
    retiredAt:{ type: Date, required: true },
    retiredBy:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('ParkingPoint', parkingPoint);
