import React from "react";
import "./CardGame.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { videoGameId } from "../../store/reducer/thunk";

const CardGame = ({ name, image, genres, id, setImage ,rating }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleClick = () => {
    navigate(`/detail/${id}`);
    dispatch(videoGameId(id));
    setImage(image);
  };
  return (
    <div className="card">
      <img className="card__image" onClick={handleClick} src={image} alt="" />
      <h3 className="card__name">{name}</h3>
      <div className="card__genres">
        {genres.map((genre) => (
          <h4 key={genre.name} className="card__genres--container">
            {genre.name}
          </h4>
        ))}
        
        <h5 className="card__rating">{rating}</h5>
      </div>
    </div>
  );
};

export { CardGame };
