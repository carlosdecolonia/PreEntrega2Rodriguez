import React from 'react'
import Item from '../item/Item'
import './ItemList.css'
//se encarga de hacer el map
const ItemList = ({productos}) => {
  return (
    <div className='d-flex justify-content-between align-items-center flex-wrap'>
         {productos.map((prod)=> <Item key={prod.id} prod = {prod}/>)}
          
    </div>
  )
}

export default ItemList