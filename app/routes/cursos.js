const express = require('express')
const cursosRouter = express.Router()
const path = '/'

cursosRouter.get(path, (req, res) => {
  res.json({ mensaje: '¡Apuntate a un curso!' })
})

cursosRouter.post(path, (req, res) => {
  res.json({ mensaje: 'Curso añadido' })
})

cursosRouter.delete(path, (req, res) => {
  res.json({ mensaje: 'Curso borrado' })
})

module.exports = cursosRouter
