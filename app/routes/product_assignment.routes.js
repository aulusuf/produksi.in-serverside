module.exports = (app) => {
    const controller = require('../controller/product_assignment.controller')
    let router = require('express').Router()
    router.post('/api/product_assignment/create', controller.create)
    router.get('/api/product_assignments', controller.findAll)
    router.get('/api/product_assignment/:id', controller.findOne)
    router.put('/api/product_assignment/:id', controller.update)
    router.delete('/api/product_assignment/:id', controller.delete)

    app.use('/',router)
}