const { getAllDdAPi, getNameVideo } = require("../controllers/getAllGames")
const { getBdVideoGames, getApiGamers } = require("../controllers/getApiBD")

const getAllVideoGames = async (req , res) =>{
    const { name } = req.query
    try {
        if(!name){
            const allVideoGame = await getAllDdAPi()
            res.status(200).json(allVideoGame)
        }else { 
            const videoName = await getNameVideo(name)
            res.status(200).json(videoName)
        }
    } catch (error) {
        res.status(404).json(error)
    }
}

const getApiVideogames = async ( req , res) =>{
    const apiGames = await getApiGamers()
    try {
        if(apiGames === []){
            return res.status(404).json('errorr')
        }
        return res.status(200).json(apiGames)
        
    } catch (error) {
        res.status(404).json(error)
    }
}

const getBdGames = async ( req , res ) =>{
    const bdGames =  await getBdVideoGames()
    res.status(200).json(bdGames)
}

module.exports = {
    getAllVideoGames,
    getApiVideogames,
    getBdGames
}