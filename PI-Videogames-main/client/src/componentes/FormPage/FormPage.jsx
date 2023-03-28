import React, { useEffect } from "react";
import "./Form.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createVideoGame,
  getGerens,
  getPlataformas,
} from "../../store/reducer/thunk";
import Error from "../Error/Error";
import Spiner from "../Spiner/Spiner";
import { getValidation } from "../../store/reducer/videoGames";

const FormPage = () => {
  const dispatch = useDispatch();
  const { allGerens, plataformas, success } = useSelector(
    (state) => state.videoGames
  );
  console.log(success);

  const [error, setError] = useState(false);
  const [error1, setError1] = useState(false);
  const [succes, setSucces] = useState(false);
  const [value, setValue] = useState({
    name: "",
    imagen: "",
    lanzamiento: "",
    rating: "",
    description: "",
    plataformas: [],
    genres: "",
  });

  const [input, setInput] = useState([]);
  const handleChangeNombre = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleChangeLanzamiento = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleChangeRaiting = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleChangePlataforma = (e) => {
    setValue({
      ...value,
      plataformas: [...value.plataformas, e.target.value],
    });
  };
  const handleCha = (e) => {
    setValue({ ...value, genres: e.target.value });
    setInput([...input, e.target.value]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      /^\d+(\.\d+)?$/.test(value.rating) &&
      /^\d{1,2}-\d{1,2}-\d{4}$/.test(value.lanzamiento)
    ) {
      setError(true);
      dispatch(getValidation());
    } else if (
      [
        value.name,
        value.imagen,
        value.lanzamiento,
        value.rating,
        value.description,
      ].includes("")
    ) {
      setError1(true);
    }
  };

  useEffect(() => {
    dispatch(getGerens());
    dispatch(getPlataformas());
  }, []);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        console.log("hola");
        setError(false);
        setSucces(true);
        dispatch(createVideoGame(value));
        // dispatch(getValidation())
      }, 2000);
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      console.log('hola')
      setTimeout(() => {
      dispatch(getValidation());
      }, 4000);
    }
  }, [success]);
  useEffect(() => {
    if (error1) {
      setTimeout(() => {
        setError1(false);
        setSucces(true);
      }, 2000);
    }
  }, [error1]);
  useEffect(() => {
    if (succes) {
      setTimeout(() => {
        setSucces(false);
      }, 2000);
    }
  }, [succes]);
  return (
    <div className="form">
      {error && <Spiner />}
      {error1 && <Spiner />}
      {succes && <Error />}
      <div className="form__container">
        <form action="" className="form__formulario">
          <label htmlFor="" className="letra">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            autoFocus
            className="input"
            placeholder="Nombre del Videojuego"
            onChange={handleChangeNombre}
          />
          <label htmlFor="" className="letra">
            imagen
          </label>
          <input
            type="text"
            name="imagen"
            placeholder="Url de la imagen"
            className="input"
            onChange={handleChange}
          />
          <label htmlFor="" className="letra">
            lanzamiento ,(mes-día-año)
          </label>
          <input
            type="text"
            name="lanzamiento"
            placeholder="Fecha de lanzamiento"
            className="input"
            onChange={handleChangeLanzamiento}
          />
          <p className="cautemoc">
            {/^[A-Za-z]+$/.test(value.lanzamiento)
              ? "no puedes poner letras sigue la sintaxis"
              : ""}
          </p>
          <label htmlFor="" className="letra">
            raiting
          </label>
          <input
            type="text"
            name="rating"
            placeholder="Puntuacion del Videogame"
            className="input"
            onChange={handleChangeRaiting}
          />
          <p className="cautemoc">
            {/^[A-Za-z]+$/.test(value.rating)
              ? "No puedes poner letras ni negativos"
              : ""}
          </p>
          <label htmlFor="" className="letra">
            description
          </label>
          <textarea
            type="text"
            placeholder="Descripcion del Videogame"
            onChange={handleChange}
            name="description"
          />
        </form>
        <div className="form__array">
          <select className="form__Select" onChange={handleChangePlataforma}>
            <option>plataformas</option>
            {plataformas.map((plata) => (
              <option key={plata}>{plata}</option>
            ))}
          </select>
          <div className="form__plataforms">
            {value.plataformas.map((nombre) => (
              <h3 className="form__h3" key={nombre}>{nombre}</h3>
            ))}
          </div>
          <select id="" className="form__Select" onChange={handleCha}>
            <option>generos</option>
            {allGerens.map((gerens) => (
              <option name={gerens.name} key={gerens.name}>{gerens.name}</option>
            ))}
          </select>
          <div className="form__plataforms">
            {input.map((nombre) => (
              <h3 className="form__h3" key={nombre}>{nombre}</h3>
            ))}
          </div>
          <button onClick={handleSubmit} className="form__btn">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export { FormPage };
