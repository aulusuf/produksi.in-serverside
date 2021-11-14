module.exports = (app) => {
    const controller = require('../controller/type.controller')
    let router = require('express').Router()
    router.post('/api/type/create', controller.create)
    router.get('/api/types', controller.findAll)
    router.get('/api/type/:id', controller.findOne)
    router.put('/api/type/:id', controller.update)
    router.delete('/api/type/:id', controller.delete)

    app.use('/',router)
}