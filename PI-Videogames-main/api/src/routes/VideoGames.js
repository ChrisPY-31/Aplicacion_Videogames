const { createVideogame } = require('../handlers/createVideogame')
const { getAllVideoGames , getApiVideogames , getBdGames } = require('../handlers/getAllVideoGames')
const { getGamesId } = require('../handlers/getGamesId')

const mainGames = require('express').Router()
mainGames.get('/bd' , getBdGames)
mainGames.get('/api' , getApiVideogames)
mainGames.get('/' , getAllVideoGames)
mainGames.get('/:id' , getGamesId)
mainGames.post('/' , createVideogame)

module.exports = mainGames