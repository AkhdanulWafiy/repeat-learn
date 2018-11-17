var db = require('../models')

function getUsers (req, res) {
  res.status(200).json("OK")
}

function helloRPL (req, res) {
  res.status(200).json("Heloo boys")
}

function Habibi (req, res){
  res.status(200).json("halo")
}

function daftar (req, res) {
  db.User.create({
    nis: req.body.nis,
    name: req.body.name,
    password: req.body.password,
    born: req.body.born
  })
  .then(function(berhasil) {
    res.status(201).json(berhasil)
  })
  .catch(function(gagal) {
    res.status(500).json(gagal)
  })
}

module.exports = {
  getUsers, helloRPL, Habibi, daftar
}