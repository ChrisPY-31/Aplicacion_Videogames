import React, { useState , useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import {createVideoGame, getGerens , getPlataformas} from '../../store/reducer/thunk'

const Formulario = () => {
  const dispatch = useDispatch()
  const {allGerens} = useSelector(state => state.videoGames)
  
  const [value , setValue] = useState({
    name:'',
    imagen:'',
    lanzamiento:'',
    rating:'',
    description:'',
    plataformas:[],
    genres:'',
  })
  const [input, setInput] = useState([])

  const handleChange = (e) =>{
    setValue({...value ,
      [e.target.name]: e.target.value
    })
  }
  const handleChangePlataforma = (e) =>{
    setValue({
      ...value,
      plataformas: [...value.plataformas, e.target.value ]
    });   
    
  }
  const handleCha = (e) =>{
    setValue({...value ,
    genres:e.target.value
    })
    setInput([...input , e.target.value])
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(value)
    if([value.name , value.imagen ,value.lanzamiento , value.rating , value.description ].includes('')){
      alert('error')
    }else{
      dispatch(createVideoGame(value))
    }
    
  }

  useEffect(() =>{
    dispatch(getGerens())
    // dispatch(getPlataformas())
  },[])
  
  // const [nombre, setNombre] = useState("");
  // const [fechaLanzamiento, setFechaLanzamiento] = useState("");
  // const [rating, setRating] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Aquí iría la lógica para enviar el formulario si todo está validado correctamente
  // };

  // const handleChangeNombre = (event) => {
  //   const valor = event.target.value;
  //   if (!/\d/.test(valor)) { // Si no contiene números
  //     setNombre(valor);
  //   }
  // };

  // const handleChangeFechaLanzamiento = (event) => {
  //   const valor = event.target.value;
  //   if ( /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.test(valor)) { // Si sigue el formato AAAA-MM-DD
  //     setFechaLanzamiento(valor);
  //   }
  // };

  // const handleChangeRating = (event) => {
  //   const valor = event.target.value;
  //   if (/^\d*\.?\d*$/.test(valor) && parseFloat(valor) >= 0) { // Si es un número decimal no negativo
  //     setRating(valor);
  //   }
  // };

  return (
    <div className="form">
      <div className="form__container">
        <form action="" className="form__formulario" >
          <label htmlFor=""  className="letra" >Nombre</label>
          <input type="text"
          name="name"
          autoFocus 
          className="input"
          placeholder="Nombre del Videojuego"
          onChange={handleChange} 
          />
          <label htmlFor="" className="letra" >imagen</label>
          <input 
          type="text" 
          name="imagen"
          placeholder="Url de la imagen" 
          className="input"
          onChange={handleChange}
          />
          <label htmlFor="" className="letra" >lanzamiento</label>
          <input 
          type="text" 
          name="lanzamiento"
          placeholder="Fecha de lanzamiento" 
          className="input"
          onChange={handleChange}
          />
          <label htmlFor="" className="letra" >raiting</label>
          <input 
          type="text" 
          name="rating"
          placeholder="Puntuacion del Videogame" 
          className="input"
          onChange={handleChange}
          />
          <label htmlFor="" className="letra" >description</label>
          <textarea 
          type="text" 
          placeholder="Descripcion del Videogame"
          onChange={handleChange}
          name='description'
          />
        </form>
        <div className="form__array">
          <select  className="form__Select" onChange={handleChangePlataforma}>
            <option >wsdfgi</option>
            <option >wi</option>
          </select>
          <div>
            {value.plataformas.map(nombre => <h3 style={{color:'white'}}>{nombre}</h3>)}
          </div>
          <select  id="" className="form__Select" onChange={handleCha}>
            <option name='genero'>generos</option>
            {
              allGerens.map(gerens =><option name={gerens.name}>{gerens.name}</option>
              )
            }
            <option >loco</option>
          </select>
          <option value="loco">loco</option>
          <div>
            {input.map(nombre => <h3 style={{color:'white'}}>{nombre}</h3>)}
          </div>
        </div>
        <button onClick={handleSubmit}>Enviar</button>
      </div>
    </div>
  );
};

export default Formulario;