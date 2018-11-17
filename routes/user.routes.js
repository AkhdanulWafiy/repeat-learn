var routes = require('express').Router()
var user = require('../controllers/user.controller')

routes.get('/', user.getUsers)
routes.get('/hello-rpl', user.helloRPL)
routes.get('/hello-Habibi', user.Habibi)

routes.post('/daftar', user.daftar)

module.exports = routes

// http://localhost:3500/user/