const { getApiGamers } = require("../controllers/getApiGamers")

const createVideogame = async ( req , res ) =>{

    const { name , description , plataformas , imagen , lanzamiento , rating , genres ,} = req.body

    try {
        const getGenres = await getApiGamers( name , description , plataformas , imagen , lanzamiento , rating , genres)
        // if(!name , !description , !plataformas ,!imagen , !lanzamiento ,!rating)
        res.status(200).json(getGenres)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports ={
    createVideogame
}