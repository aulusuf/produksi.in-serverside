module.exports = (app) => {
    const controller = require('../controller/category.controller')
    let router = require('express').Router()
    router.post('/api/category/create', controller.create)
    router.get('/api/categories', controller.findAll)
    router.get('/api/category/:id', controller.findOne)
    router.put('/api/category/:id', controller.update)
    router.delete('/api/category/:id', controller.delete)

    app.use('/',router)
}