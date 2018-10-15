const Cerveza = require('../models/Cervezas')
const { ObjectId } = require('mongodb')

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
  const cerveza = new Cerveza(req.body)
  cerveza.save((err, cerveza) => {
    if (err) {
      res.status(400).send({
        message: 'Ha ocurrido un error al crear la cerveza',
        error: err })
    }
    res.status(201).send(cerveza)
  })
}
/*
const updateCerveza = (req, res) => {
  const cervezaId = req.params.id
  const cerveza = new Cerveza(req.body)
  Cerveza.findOneAndUpdate({ _id: cervezaId }, { $set: cerveza }, (err, cerveza) => {
    if (err) return res.status(404).send({ mensaje: 'Id erroneo' })
    if (cerveza) return res.send(cerveza)
    return res.status(404).send({ mensaje: 'La cerveza no existe' })
  })
}
*/

const updateCerveza = (req, res) => {
  const id = req.params.id
  Cerveza.findOne({ _id: id }, (err, cerveza) => {
    if (!ObjectId.isValid(id)) {
      return res.status(404).send()
    }
    if (err) {
      return res.status(500).json({
        message: 'Se ha producido un error al guardar la cerveza',
        error: err
      })
    }
    if (!ObjectId.isValid(id)) {
      return res.status(404).send()
    }
    if (!cerveza) {
      return res.status(404).json({
        message: 'No hemos encontrado la cerveza'
      })
    }

    Object.assign(cerveza, req.body)

    cerveza.save((err, cerveza) => {
      if (err) {
        return res.status(500).json({
          message: 'Error al guardar la cerveza'
        })
      }
      if (!cerveza) {
        return res.status(404).json({
          message: 'No hemos encontrado la cerveza'
        })
      }
      return res.json(cerveza)
    })
  })
}

const deleteCerveza = (req, res) => {
  const cervezaId = req.params.id
  Cerveza.findOne({ _id: cervezaId }, (err, cerveza) => {
    if (err) return res.status(404).send({ mensaje: 'Id erroneo' })
    if (cerveza) return res.send(cerveza)
    return res.status(404).send({ mensaje: 'La cerveza no existe' })
  }).remove()
}

module.exports = {
  listCervezas,
  searchCerveza,
  showCerveza,
  addCerveza,
  updateCerveza,
  deleteCerveza
}
