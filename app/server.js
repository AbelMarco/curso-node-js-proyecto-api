const express = require('express') // llamamos a Express
const app = express()
const router = require('./routes')

const port = process.env.PORT || 8080 // establecemos nuestro puerto

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
