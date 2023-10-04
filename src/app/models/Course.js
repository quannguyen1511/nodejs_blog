const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: 'test name', maxLength: 255 },
    description: { type: String, default: 'test description', maxLength: 600 },
    image: { type: String, default: 'test image', maxLength: 255 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
