const { getApiBdId } = require("../controllers/getApiBdId")

const getGamesId = async (req , res) =>{
    const {id} = req.params
    try {
        const gameID = await getApiBdId(id)
        res.status(200).json(gameID)
    } catch (error) {
        res.status(404).json('error')
    }
    
}

module.exports = {getGamesId}