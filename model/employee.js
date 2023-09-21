const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
    name:   String,
    age:    Number,
    city:   String, 
    role:   String,
    salary: Number,
});

const employeeDetails = mongoose.model('Employee', employeeSchema);

module.exports = {employeeDetails}