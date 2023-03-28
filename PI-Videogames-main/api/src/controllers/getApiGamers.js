const {Videogame , Genres} = require("../db")

const getApiGamers = async( name , description , plataformas , imagen , lanzamiento , rating , genres ) =>{
    try {
   
        if(!name || !description  || !plataformas || !imagen){
            throw ("faltan datos para crear el juego");
         }
         
         else {
           const newGame = await Videogame.create({
              name,
              description,
              lanzamiento,
              rating,
              imagen,
              plataformas
            
           }); 
           
           const newGenre = await Genres.findAll({
            where: {
               name:genres,
            },
          });
          
           newGame.addGenres(newGenre);
           return newGame;
      
        }
      } catch (error) {
        return error;
      }
    };

module.exports ={
    getApiGamers
}