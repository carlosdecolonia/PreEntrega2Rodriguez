import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar/NavBar';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const saludo = "Bienvenidos a mi Tienda 2.0"
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={saludo}/>} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2>No existe la página</h2>} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
