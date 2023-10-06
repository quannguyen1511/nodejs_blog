const newRouter = require('./news.router');
const siteRouter = require('./site.router');
const coursesRouter = require('./courses.route');

function route(app) {
    app.use('/news', newRouter);
    app.use('/courses', coursesRouter);

    app.use('/', siteRouter);
}

module.exports = route;
