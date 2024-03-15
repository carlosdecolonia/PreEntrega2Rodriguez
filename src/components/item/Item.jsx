import React from 'react'
import './Item.css'
import {Link} from 'react-router-dom'

const Item = ({prod}) => {
  return (
        <div className = 'card mb-4 p-3' style={{width:'20rem'}} key={prod.id}>
            <img src={prod.imagen} alt={prod.nombre} className='card-img-top'/>
          <div className='card-body'>
            <p className='card-text'>{prod.nombre}</p>
            <p>Precio = {prod.precio}</p>
          </div>
          <Link className='btn btn-primary' to={`/item/${prod.id}`}>Ver más</Link>
    </div>
  )
}

export default Item