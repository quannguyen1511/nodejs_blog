const newRouter = require('./news.router');
const siteRouter = require('./site.router')

function route(app) {
    app.use('/news', newRouter);

    app.use('/', siteRouter);
}

module.exports = route;
