const express = require('express') // llamamos a Express
const app = express()
const router = require('./routes')
require('./db')
const port = process.env.PORT || 8080 // establecemos nuestro puerto
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// require('./addCerveza')

app.use('/api', router)

app.get('/', (req, res) => {
  res.json({ mensaje: `¡Hola Desconocido!` })
})

app.get('/', (req, res) => {
  res.json({ mensaje: `¡Hola ${req.query.nombre}!` })
})

app.get('/:nombre', (req, res) => {
  res.json({ mensaje: `¡Hola ${req.params.nombre}!` })
})

// iniciamos nuestro servidor
app.listen(port, () => console.log(`API escuchando en el puerto ${port}`))

console.log('Api todavia no esta escuchando')

module.exports = app
