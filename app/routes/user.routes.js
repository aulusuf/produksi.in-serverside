module.exports = (app) => {
    const controller = require('../controller/user.controller')
    app.get('/api/users', controller.findAll)
    app.get('/api/:id', controller.findOne)
    app.put('/api/:id', controller.update)
    app.delete('/api/:id', controller.deleteOne)
}

