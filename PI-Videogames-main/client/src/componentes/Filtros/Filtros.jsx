import React from "react";
import "./Filtros.css";
import { useState , useEffect} from "react";
import { useDispatch , useSelector} from "react-redux";
import { NameGame , getApiBd , getGerens , getGenresFilter} from "../../store/reducer/thunk";
import {getAscDesc , getRaiting } from '../../store/reducer/videoGames'

const Filtros = () => {
  const dispatch = useDispatch();
  const {allGerens } = useSelector(state => state.videoGames)
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput('')
    dispatch(NameGame(input));
  };
  const handleAscDesc = (e) =>{
    dispatch(getAscDesc(e.target.value))
  }
  const handleSubmitFilter = (e) =>{
    dispatch(getApiBd(e.target.value))
  }
  const handleGenres = (e) =>{
    dispatch(getGenresFilter(e.target.value))
  }
  useEffect(() =>{
    dispatch(getGerens())
  },[])
  return (
    <section className="filtro">
      <div className="filtro__container">
        <select name="" id="" className="filtro__Selecto" onChange={handleAscDesc}>
          <option value="">order</option>
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>

        <select name="" id="" className="filtro__Selecto" onChange={(e) =>dispatch(getRaiting(e.target.value))}>
          <option value="">Ranting</option>
          <option value="Rasc">Ranting ASC</option>
          <option value="Rdesc">Ranting DESC</option>
        </select>

        <select name="" id="" className="filtro__Selecto" onChange={handleSubmitFilter}>
          <option value="">Api and BD</option>
          <option value="api">Api</option>
          <option value="bd">Bd</option>
        </select>

        <select name="" id="" className="filtro__Selecto" onChange={handleGenres}>
          {
              allGerens.map(gerens =><option key={gerens.name} value={gerens.name} >{gerens.name}</option>
              )
            }
        </select>
      </div>
      <form action="" className="filtro__Buscar" onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" placeholder="Buscar Juego" onChange={handleChange} />
        <button>Buscar</button>
      </form>
    </section>
  );
};

export { Filtros };
