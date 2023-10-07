const newRouter = require('./news.router');
const meRouter = require('./me.router');
const siteRouter = require('./site.router');
const coursesRouter = require('./courses.route');

function route(app) {
    app.use('/news', newRouter);
    app.use('/courses', coursesRouter);
    app.use('/me', meRouter);

    app.use('/', siteRouter);
}

module.exports = route;
