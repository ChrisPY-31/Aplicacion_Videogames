const {Videogame ,Genres} = require("../db")
const axios = require('axios')
require("dotenv").config();
const { API_KEY } = process.env;
const getApiBdId = async(id) =>{
    if(id.length > 10){
        const idBd = await Videogame.findAll({
            where:{
                id:id
            },
            include: {
                model: Genres,
                attributes: ["name"],
                through: { attributes: [] },
              },
        })
        console.log(idBd)
        return idBd
    }
    else if(id.length < 8){
       // https://api.rawg.io/api/games/3498?key=00cbdafae5f14cde9c2d008879244c56
        const {data} = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
        let objeto = [{
            id: data.id,
              name: data.name ,
              plataformas: data.parent_platforms.map(plataforma => plataforma.platform.name),
              imagen: data.background_image,
              lanzamiento: data.released,
              rating: data.rating,
              description: data.description ,
              Genres: data.genres.map(genero =>{ 
                let objeto ={
                    name:genero.name
                }
                return objeto
              })
        }]
        return objeto
       
    }
}

module.exports = {
    getApiBdId
}