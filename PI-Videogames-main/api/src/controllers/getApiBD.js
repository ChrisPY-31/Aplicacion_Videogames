const { Videogame, Genres } = require("../db");
const { API_KEY } = process.env;
require("dotenv").config();
const axios = require("axios");

const getApiGamers = async() =>{
    let game = [];
    for (let i = 1; i <= 5; i++) {
      const { data } = await axios.get(
        `https://rawg.io/api/games?key=${API_KEY}&page=${i}`
      );
      //es un intervas que comunica 2 software entre si 
      //que es una api
      //diferencia entre api rest
      //que es el protocolo http 
      
      await data.results.map((games) => {
        let juego = {
          id: games.id,
          name: games.name ? games.name : "no hay nda",
          plataformas: games.platforms.map((el) => el.platform.name),
          imagen: games.background_image,
          lanzamiento: games.released,
          rating: games.rating,
          description: games.description ,
          Genres: games.genres.map((g) => {
            let objeto ={
              name:g.name
            }
            return objeto
          })
        };
        game.push(juego);
      });
    }
    return game.map((juego) => juego);
  };

const getBdVideoGames = async() =>{
    const data = await Videogame.findAll({
        include: {
            model: Genres,
            attributes: ["name"],
            through: { attributes: [] },
          },
    })
    return data
}

module.exports ={
    getApiGamers,
    getBdVideoGames
}