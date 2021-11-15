module.exports = (app) => {
    const controller = require('../controller/product.controller')
    let router = require('express').Router()
    router.post('/api/product/create', controller.create)
    router.get('/api/products', controller.findAll)
    router.get('/api/product/:id', controller.findOne)
    router.put('/api/product/:id', controller.update)
    router.delete('/api/product/:id', controller.delete)

    app.use('/',router)
}