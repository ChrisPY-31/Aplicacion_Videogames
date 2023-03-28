const axios = require("axios");
const { Genres } = require("../db");
require("dotenv").config();
const { API_KEY } = process.env;
const getGerents = async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://api.rawg.io/api/genres?key=${API_KEY}`
    );
     await data.results.map((game) => {
      let objeto = {
        name: game.name,
      };
      Genres.findOrCreate({ where: objeto });
    });
    let results = await Genres.findAll()
    res.status(200).json(results);
  } catch (error) {
    res.status(404).json(error)
  }
};
module.exports = {
  getGerents,
};
