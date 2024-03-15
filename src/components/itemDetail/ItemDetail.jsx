import React from 'react'
import ItemCount from '../itemCount/ItemCount'

const ItemDetail = ({productDetail}) => {
    if (!productDetail) {
        return <div>Cargando detalles del producto...</div>;
      }
      
      return (
    <div>
        <h3>Detalle: {productDetail.nombre}</h3>
        <img src={productDetail.imagen} alt={productDetail.nombre}/>
        <p>{productDetail.descripcion}</p>
        <p>${productDetail.precio}</p>
        <p>{productDetail.categoria}</p>
        <ItemCount stock={productDetail.stock}/>
    </div>
  )
}

export default ItemDetail