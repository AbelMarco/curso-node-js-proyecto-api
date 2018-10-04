const Cerveza = require('../models/Cervezas')

const listCervezas = (req, res) => {
  Cerveza.find({}, (err, cervezas) => {
    if (err) res.status(500).send(err)
    res.send(cervezas)
  })
}

const searchCerveza = (req, res) => {
  const keyword = req.query.q
  Cerveza.find({ $text: { $search: keyword } }, (err, cerveza) => {
    if (err) return res.status(404).send({ mensaje: 'Se ha producido un error' })
    if (cerveza.length > 0) return res.send(cerveza)
    return res.status(404).send({ mensaje: `No se encuentra ninguna cerveza con la palabra: ${keyword}` })
  })
}

const showCerveza = (req, res) => {
  const cervezaId = req.params.id
  Cerveza.findOne({ _id: cervezaId }, (err, cerveza) => {
    if (err) return res.status(404).send({ mensaje: 'Id erroneo' })
    if (cerveza) return res.send(cerveza)
    return res.status(404).send({ mensaje: `No existe cerveza con Id ${cervezaId}` })
  })
}

const addCerveza = (req, res) => {
  res.json({ mensaje: '¡Cerveza añadida!' })
}

const updateCerveza = (req, res) => {
  const cervezaId = req.params.id
  res.json({ mensaje: `Actualizada la cerveza: ${cervezaId}!` })
}

const deleteCerveza = (req, res) => {
  const cervezaId = req.params.id
  res.json({ mensaje: `Borrada la cerveza: ${cervezaId}!` })
}

module.exports = {
  listCervezas,
  searchCerveza,
  showCerveza,
  addCerveza,
  updateCerveza,
  deleteCerveza
}
