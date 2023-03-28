import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import "./DetailPage.css";

const DetailPage = ({ imageInfo }) => {
  const { videoGameId } = useSelector((state) => state.videoGames);
  const Country = styled.div`
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(${(props) => props.imageUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    min-height: 100vh;
    width: 100%;
    position: absolute;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      min-height: 100%;
      background-color: rgba(
        0,
        0,
        0,
        0.3
      ); // establece la opacidad de la imagen
      z-index: 1; // establece la posición en el eje z
    }

    & > div {
      position: relative;
      z-index: 2; // establece la posición en el eje z
    }
  `;
  return (
    <Country imageUrl={imageInfo}>
      {videoGameId.map((game) => (
        <div className="detail" key={game.id}>
          <div className="detail__container1">
            <h3 className="detail__name color">{game.name}</h3>
            <div>
              {game.Genres?.map((genero) => (
                <span key={genero.name} className="detail__genero color">{genero.name}</span>
              ))}
            </div>
            <div>
              {game.plataformas.map((plataforma) => (
                <span key={plataforma} className="detail__plataformas color">{plataforma}</span>
              ))}
            </div>
            <h4 className="detail__rating color">{game.rating}</h4>
            <button className="detail__sesion">INICIAR SESION</button>
          </div>
          <div className="detail__container2">
            <h3 className="detail__juego">Description</h3>
            <img className="detail__image" src={game.imagen} alt="" />
            <p className="detail__description">{game.description}</p>
            <div className="detail__cuau">
              <div className="detail__desarrollo">
                <h4 className="detail__publicado">Publicado por</h4>
                <p className="detail__parrafo">
                  El desarrollador mas guapo Inc.
                </p>
              </div>
              <div>
                <h4 className="detail__publicado">Desarrollado por </h4>
                <p className="detail__parrafo">Cuauhtemoc Inc.</p>
              </div>
              <div>
                <h4 className="detail__publicado">Fecha de lanzamiento</h4>
                <p className="detail__parrafo">{game.lanzamiento}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Country>
  );
};

export { DetailPage };
