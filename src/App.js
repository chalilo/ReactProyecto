import './App.css';
import NavBar from './Components/Header/NavBar';
//import Input from './Components/Input';
import MiComponente from './Components/MiComponente';
import ItemListContainer from './Components/Items/ItemListContainer';
import ItemDetailContainer from './Components/Items/ItemDetailContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  /*const logeoConsola = (a)=>console.log(a);
  logeoConsola("Componente Padre")*/
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"Lista de Items"}/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Lista de Items"}/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element=''/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
