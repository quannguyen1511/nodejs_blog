const Course = require('../models/Course');

class SiteController {
    constructor() {}

    // [GET] /home
    async home(req, res) {
        try {
            const courses = await Course.find({});
            res.json(courses);
            return;
        } catch (error) {
            res.status(500).json({ error: 'ERRORR' });
        }
    }

    // [GET] /search
    show(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
