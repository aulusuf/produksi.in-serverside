module.exports = (app) => {
    const controller = require('../controller/unit.controller')
    let router = require('express').Router()
    router.post('/api/unit/create', controller.create)
    router.get('/api/units', controller.findAll)
    router.get('/api/unit/:id', controller.findOne)
    router.put('/api/unit/:id', controller.update)
    router.delete('/api/unit/:id', controller.delete)

    app.use('/',router)
}