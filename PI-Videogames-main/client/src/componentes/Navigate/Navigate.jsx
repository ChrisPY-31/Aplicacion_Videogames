import React from 'react'
import { Link , useNavigate} from "react-router-dom";
import './Navigate.css'

const Navigate = () => {
  const navigate = useNavigate()
  return (
    <header className='header'>
        <nav className='header__nav'>
            <h1 className='header__name' onClick={()=>navigate('/home')}>Videogames</h1>
            <ul className='header__ul'>
                <li><Link className='header__link' to={'/home'}>Home</Link></li>
                <li><Link className='header__link' to={'/Form'}>Create VideoGame</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export {Navigate}