//import React from 'react'
//importamos el hook
import { useState, useEffect} from 'react'
import { getProductos } from '../../mock/data'
import { useParams } from "react-router-dom";
import './ItemListContainer.css'
import ItemList from '../itemList/ItemList';


function ItemListContainer({greeting}) {
  const { categoriaId } = useParams();
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(false)
  const[loading, setLoading] = useState(false)

  //Si trabajo con una promesa, uso useEffect para mostrar algo que demora
  useEffect(() => {
    setLoading(true); // Establecer loading en true al comenzar la carga
  
    getProductos()
      .then((respuesta) => {
        if(categoriaId){
          let filtrado = respuesta.filter((producto)=>producto.categoria === categoriaId)
          setProductos(filtrado)
        }else{
          setProductos(respuesta) // Actualizar el estado de productos con la respuesta
        }
      })
      .catch((error) => {
        setError(error); // Capturar y manejar cualquier error
      })
      .finally(() => {
        setLoading(false); // Restablecer loading a false cuando la carga se completa
      });
  }, [categoriaId]);
  
if(loading){
  return <h2>En carga...</h2>
}
if(error){
  return <h2>Ha habido un error.</h2>
}
  return (
    <main>
      <h2 className="greeting">{greeting}</h2>
      <section className="item-list-container">
       <ItemList productos ={productos}/>
      </section>
    </main>
  );
}
export { ItemListContainer };
