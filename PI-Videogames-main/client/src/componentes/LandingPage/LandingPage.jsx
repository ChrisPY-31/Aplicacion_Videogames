import React from 'react'
import { useNavigate } from 'react-router-dom'
import './LandingPage.css' 

const LandingPage = ( {setisNavigate} ) => {
  const navigate = useNavigate()

  const handleClick = () =>{
    navigate('/home')
    setisNavigate(true)

  }
  return (
    <div className='landing'>
        <h1 className='landing__game'>Videogames</h1>
        <button className='landing__continuar' onClick={handleClick}>Press Start</button>
    </div>
  )
}

export { LandingPage }