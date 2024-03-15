import React from 'react'

const Item = ({prod}) => {
  return (
        <div className = 'card' style={{width:'20rem'}} key={prod.id}>
            <img src={prod.imagen} alt={prod.nombre} className='card-img-top'/>
          <div className='card-body'>
            <p className='card-text'>{prod.nombre}</p>
            <p>Precio = {prod.precio}</p>
          </div>
          <button className='btn btn-primary'>Ver más</button>
    </div>
  )
}

export default Item