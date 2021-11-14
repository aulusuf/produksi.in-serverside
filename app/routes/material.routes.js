module.exports = (app) => {
    const controller = require('../controller/material.controller')
    let router = require('express').Router()
    router.post('/api/material/create', controller.create)
    router.get('/api/materials', controller.findAll)
    router.get('/api/material/:id', controller.findOne)
    router.put('/api/material/:id', controller.update)
    router.delete('/api/material/:id', controller.delete)

    app.use('/',router)
}