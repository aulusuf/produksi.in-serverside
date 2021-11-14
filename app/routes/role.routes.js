module.exports = (app) => {
    const controller = require('../controller/role.controller')
    let router = require('express').Router()
    router.get('/api/roles', controller.findAll)
    router.get('/api/role/:id', controller.findOne)

    app.use('/',router)
}