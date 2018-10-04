// const Cerveza = require('../Models/Cervezas')

const listCervezas = (req, res) => {
  res.json({ mensaje: '¡A beber la cerveza!' })
}

const searchCerveza = (req, res) => {
  const keyword = req.query.q
  res.json({ mensaje: `¡A beber la cerveza: ${keyword}!` })
}

const showCerveza = (req, res) => {
  const cervezaId = req.params.id
  res.json({ mensaje: `¡A beber la cerveza: ${cervezaId}!` })
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
