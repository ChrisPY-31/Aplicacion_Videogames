const { Router } = require('express');
const mainGames = require('./VideoGames')
const mainGenres = require('./Genres')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use('/videogame', mainGames )
router.use('/gerens' , mainGenres )


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



module.exports = router;
