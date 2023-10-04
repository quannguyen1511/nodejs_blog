const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/johnny_blog_dev');
        console.log('Connect Successfully!');
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect };
