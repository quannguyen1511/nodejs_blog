const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: {
            type: String,
            default: 'test name',
            maxLength: 255,
            require: true,
        },
        description: { type: String, default: 'test description' },
        image: { type: String, default: 'test image' },
        videoId: { type: String, default: 'KiJGV9ZH1XE', require: true },
        slug: { type: String, slug: 'name' },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
