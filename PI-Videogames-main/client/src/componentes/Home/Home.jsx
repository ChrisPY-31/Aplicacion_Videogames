import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allVideGames } from "../../store/reducer/thunk";
import { CardGame } from "../CardGame/CardGame";
import { Filtros } from "../Filtros/Filtros";
import Pagination from "../Pagination/Pagination";
import Spiner from "../Spiner/Spiner";
import "./Home.css";

const Home = ({ setImage, genres }) => {
  const dispatch = useDispatch();
  const { videoGames } = useSelector((state) => state.videoGames);

  const [incio, setIncio] = useState(1);
  const [final, setFinal] = useState(15);
  const response1 = incio * final;
  const response2 = response1 - final;
  const juegos = videoGames.slice(response2, response1);
  useEffect(() => {
    dispatch(allVideGames());
  }, []);

  useEffect(() =>{
    if(videoGames.length)setIncio(1)
  },[videoGames])

  const paginado = (page) =>{
    setIncio(page)
  }
  return (
    <div className="home">
      <div className="home__filtres">
        <Filtros setFinal={setFinal}/>
        <Pagination paginado={paginado} final={final} videoGames={videoGames.length}/>
        <div className="home__container">
          {juegos.length === 0? <Spiner/>:juegos.map((game) => (
            <CardGame
              key={game.id}
              id={game.id}
              name={game.name}
              image={game.imagen}
              genres={game.Genres}
              setImage={setImage}
              rating={game.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Home };
