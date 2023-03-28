const { getGerents } = require('../handlers/getGerents')

const mainGenres = require('express').Router()


mainGenres.get('/' ,  getGerents)

module.exports = mainGenres