class SiteController {
    constructor() {}

    // [GET] /home
    home(req, res) {
        res.render('home');
    }

    // [GET] /search
    show(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
