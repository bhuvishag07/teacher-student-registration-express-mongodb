const mongoose = require('mongoose');

const studentSchema = require('../schema/studentSchema');

const studentModel = mongoose.model('Student', studentSchema);

module.exports = studentModel;