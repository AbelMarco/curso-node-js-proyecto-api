const express = require('express')
const cervezaRouter = express.Router()
const cervezasController = require('../Controllers/cervezasController')

// todas las cervezas
cervezaRouter.get('/', (req, res) => {
  cervezasController.listCervezas(req, res)
})
// cerveza por keyword
cervezaRouter.get('/search', (req, res) => {
  cervezasController.searchCerveza(req, res)
})

// cerveza por id
cervezaRouter.get('/:id', (req, res) => {
  cervezasController.showCerveza(req, res)
})

// Añadir cerveza
cervezaRouter.post('/', (req, res) => {
  cervezasController.addCerveza(req, res)
})

// Actualizar cerveza
cervezaRouter.put('/:id', (req, res) => {
  cervezasController.updateCerveza(req, res)
})

// Borrar cerveza
cervezaRouter.delete('/:id', (req, res) => {
  cervezasController.deleteCerveza(req, res)
})

module.exports = cervezaRouter
