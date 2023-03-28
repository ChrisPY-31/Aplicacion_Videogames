import { useEffect} from 'react'
import { useSelector } from 'react-redux'
// import { getValidation, } from "../../store/reducer/videoGames";
import { useDispatch } from 'react-redux';
import './Error.css'
const Error = (  ) => {
    const dispatch = useDispatch()
    const { success } = useSelector(state => state.videoGames)
    
    // useEffect(() =>{
    //   if(success){
    //     dispatch(getValidation())
    //   }
    // },[success])
  return (
    <div className='error'>
    <div className="error__container">
         {success?
         <div className='cerrar__error'>
           <img className='cerrar__image' src="https://www.pinpng.com/pngs/m/318-3182941_paloma-verde-png-imagen-de-paloma-verde-transparent.png" alt="" />
           <h1 className='cerrar__campos'>Actividad creada con exito</h1>
         </div>    
     :<div className='cerrar__error'>
       <img className='cerrar__image' src="https://img.freepik.com/iconos-gratis/cancelar_318-704121.jpg?w=2000" alt="" />
       <h1 className='cerrar__campos'>Error todos los campos son obligatorios</h1>
       </div>}
    </div>
 </div>
  )
}

export default Error