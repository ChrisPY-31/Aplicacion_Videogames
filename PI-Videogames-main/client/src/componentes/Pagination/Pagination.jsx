import React from 'react'
import './Pagination.css'

const Pagination = ( {paginado ,final ,videoGames}) => {
    const page = []
    for(let i = 1 ; i <= Math.ceil(videoGames/final);i++){
        page.push(i)
    }

  return (
    <div className='paginado'>
        <ul className='paginado__ul'>
            {page&&page.map(number =>(
                <li className='paginado__li' key={number}>
                    <a className='paginado__link' onClick={() => paginado(number)}>{number}</a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Pagination