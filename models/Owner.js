const mongoose=require('mongoose');

const ownerSchema=new mongoose.Schema({
    firstName:String,
    LastName:String,
    Address:String,
    contactNumber:String,
    nic:String,
    vehicle:[{type: mongoose.Schema.Types.ObjectId,ref:'Vehicle'}],
    createdAt:{ type: Date, required: true },
    createdBy:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    retired: { type: Boolean},
    retiredAt:{ type: Date, required: true },
    retiredBy:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],

})

module.exports=mongoose.model('Owner',ownerSchema);