import './App.css';
import NavBar from './Components/Header/NavBar';
import ItemListContainer from './Components/Items/ItemListContainer';
import ItemDetailContainer from './Components/Items/ItemDetailContainer';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Footer from './Components/Footer/Footer';
import Contexto from './Components/Contexto'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Contexto >
        <NavBar />
        <Routes>
          <Route path='/ReactProyecto' element={<ItemListContainer greeting={"Lista de Items"} />} />
          <Route path='/ReactProyecto/category/:categoryId' element={<ItemListContainer greeting={"Lista de Items"} />} />
          <Route path='/ReactProyecto/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/ReactProyecto/cart' element={<Cart />} />
          <Route path='/ReactProyecto/checkout' element={<Checkout />} />
        </Routes>
        <Footer />
      </Contexto>
    </BrowserRouter>
  );
}

export default App;
