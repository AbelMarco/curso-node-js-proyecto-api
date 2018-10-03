const express = require('express')
const cervezaRouter = express.Router()

// todas las cervezas
cervezaRouter.get('/', (req, res) => {
  res.json({ mensaje: '¡A beber cerveza!' })
})
// cerveza por keyword
cervezaRouter.get('/search', (req, res) => {
  res.json({ mensaje: `¡¡A beber la cerveza: ${req.query.q}!` })
})

// cerveza por id
cervezaRouter.get('/:id', (req, res) => {
  res.json({ mensaje: `¡¡A beber la cerveza: ${req.params.id}!` })
})

// Añadir cerveza
cervezaRouter.post('/', (req, res) => {
  res.json({ mensaje: 'Cerveza añadida' })
})

// Actualizar cerveza
cervezaRouter.put('/:id', (req, res) => {
  res.json({ mensaje: `Cerveza con id:${req.params.id} actualizada` })
})

// Borrar cerveza
cervezaRouter.delete('/:id', (req, res) => {
  res.json({ mensaje: `Cerveza con id:${req.params.id} borrada` })
})

module.exports = cervezaRouter
