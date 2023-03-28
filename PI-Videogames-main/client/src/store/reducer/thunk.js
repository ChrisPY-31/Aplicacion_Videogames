import axios from "axios";
import {
  getAllGames,
  getAllGerens,
  getDetaild,
  getNameGame,
  getAllPlataformas,
} from "./videoGames";
export const allVideGames = () => {
  return async (dispatch, getState) => {
    const { data } = await axios.get("http://localhost:3001/videogame");
    dispatch(getAllGames(data));
  };
};
export const NameGame = (name) => {
  return async (dispatch, getState) => {
    const { data } = await axios.get(
      `http://localhost:3001/videogame?name=${name}`
    );
    dispatch(getNameGame(data));
  };
};
export const videoGameId = (id) => {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:3001/videogame/${id}`);
    console.log(data);
    dispatch(getDetaild(data));
  };
};
export const createVideoGame = (form) => {
  return async (dispatch, getState) => {
    const result = await axios.post(`http://localhost:3001/videogame`, form);
    console.log(result);
  };
};
export const getGerens = () => {
  return async (dispatch, getState) => {
    const { data } = await axios.get("http://localhost:3001/gerens");
    dispatch(getAllGerens(data));
  };
};
export const getPlataformas = () => {
  return async (dispatch, getState) => {
    const { data } = await axios.get("http://localhost:3001/videogame");
    let plataformas = data.map((el) => el.plataformas);
    let unico = [].concat(...plataformas);
    let sinRepetidos = unico.filter(
      (plataforma, index) => unico.indexOf(plataforma) === index
    );

    dispatch(getAllPlataformas(sinRepetidos));
  };
};
export const getApiBd = (e) => {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:3001/videogame/${e}`);
    dispatch(getAllGames(data));
  };
};
export const getGenresFilter = (valor) => {
  return async (dispatch, getState) => {
    const { data } = await axios.get("http://localhost:3001/videogame");
    let dato = data.filter((ele) =>
      ele.Genres.map((ele) => ele.name).includes(valor)
    );
    dispatch(getAllGames(dato));
  };
};
