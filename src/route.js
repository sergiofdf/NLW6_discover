const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

// ---- Rotas de ROOM
route.get('/', (req, res) => res.render('index', { page: 'enter-room' }))
route.get('/create-pass', (req, res) =>
  res.render('index', { page: 'create-pass' })
)

route.get('/room/:room', RoomController.open)
//Formato que o formulario de dentro da modal deve passar info: route.post('/room/323232/2/check')
route.post('/create-room', RoomController.create)

route.post('/enterroom', RoomController.enter)

// ---- Rotas de Question
route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)

module.exports = route
