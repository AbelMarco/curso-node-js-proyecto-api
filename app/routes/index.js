const express = require('express')
const router = express.Router()
const cervezaRouter = require('./cervezas')
const cursosRouter = require('./cursos')
const cursos = '/cursos'
const cervezas = '/cervezas'

router.get('/', (req, res) => {
  res.json({ mensaje: 'Bienvenido a nuestra API' })
})

// Esta forma es menos limpia a la hora de tener los recursos en su propio fichero
router.use(cervezas, cervezaRouter)

// De esta forma los recursos en su fichero solo hacen referencia al / y se puede cambiar el nombre
// del recurso mas facilmente, cambiando una sola variable
router.use(cursos, cursosRouter)

module.exports = router
