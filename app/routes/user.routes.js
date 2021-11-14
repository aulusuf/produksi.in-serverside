module.exports = (app) => {
    const controller = require('../controller/user.controller')
    app.get('/users', controller.findAll)
}

