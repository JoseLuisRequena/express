const controller = {};


controller.index = function(req, res, next) {
    res.render('index', { title: 'Jose Luis' });
}

module.exports = controller