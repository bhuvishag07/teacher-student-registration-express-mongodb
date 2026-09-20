const mongoose = require('mongoose');

const teacherSchema = require('../schema/teacherSchema');

const teacherModel = mongoose.model('Teacher', teacherSchema);

module.exports = teacherModel;