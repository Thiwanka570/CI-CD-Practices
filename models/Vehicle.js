const mongoose=require('mongoose');

const vehicleSchema= new mongoose.Schema({
    vehicleNumber:String,
    color:String,
    vehicleType:[{type: mongoose.Schema.Types.ObjectId, ref:'vehicleTypes'}],
    model:[{type : mongoose.Types.ObjectId,ref:'model'}],
    createdAt:{ type: Date, required: true },
    createdBy:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    retired: { type: Boolean},
    retiredAt:{ type: Date, required: true },
    retiredBy:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
})

module.exports=mongoose.model('Vehicle',vehicleSchema);