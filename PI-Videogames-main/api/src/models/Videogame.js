const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Videogame', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull:true
    },
    plataformas:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull:false
    },
    imagen:{
      type: DataTypes.STRING,
      allowNull:false
    },
    lanzamiento: { 
      type: DataTypes.STRING, 
      allowNull: false },

    rating:{
      type: DataTypes.FLOAT,
      validate: {
        min: 1.0,
        max: 5,
      }
    }
  },{timestamps:false});
};