const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Videogame, Genres } = require("../db");
const getAllGames = async () => {
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
const getAllGameBD = async () => {
  const result = await Videogame.findAll({
    include: {
      model: Genres,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });
  return result
};

const getAllDdAPi = async () => {
  const apiGame = await getAllGames();
  const BdGame = await getAllGameBD();
  return [...BdGame, ...apiGame];
};

const getNameVideo = async (name) => {
  const getName = await getAllDdAPi();
  const result = getName.filter((juego) =>
    juego.name.toLowerCase().includes(name.toLowerCase())
  );
  
  
    return result;
};

module.exports = {
  getAllDdAPi,
  getNameVideo,
};
