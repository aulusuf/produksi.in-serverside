module.exports = (app) => {
    const controller = require('../controller/material_request.controller')
    let router = require('express').Router()
    router.post('/api/material_request/create', controller.create)
    router.get('/api/material_requests', controller.findAll)
    router.get('/api/material_request/:id', controller.findOne)
    router.put('/api/material_request/:id', controller.update)
    router.delete('/api/material_request/:id', controller.delete)

    app.use('/',router)
}