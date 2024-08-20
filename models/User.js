const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    code:{type:String,required:true},
    createdAt:{ type: Date, required: true },
    createdBy:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    retired: { type: Boolean},
    retiredAt:{ type: Date},
    retiredBy:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
   
});

module.exports = mongoose.model('User', userSchema);
