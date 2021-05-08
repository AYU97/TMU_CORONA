const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
   // _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    patient_id: { type: String, required: true },
    name: { type: String, required: true, max: 100 },
    age: { type: String, required: true, max: 100 },
    sex: { type: String, required: true, max: 100 },
    ward: { type: String, required: false, max: 100 },
    oxygen_saturation: { type: String, required: true, max: 100 },
    bed: { type: String, required: false, max: 100 },
    blood_pressure: { type: String, required: false, max: 100 },
    pulse: { type: String, required: true, max: 100 },
    blood_sugar: { type: String, required: false, max: 100 },
    life_support_machine: { type: String, required: false, max: 100 },
    overall_condition: { type: String, required: true, max: 100 },

});


// Export the model
module.exports = mongoose.model('User', UserSchema, 'User');

