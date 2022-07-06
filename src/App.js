import './App.css';
import NavBar from './Components/Header/NavBar';
//import Input from './Components/Input';
import MiComponente from './Components/MiComponente';
import ItemListContainer from './Components/Items/ItemListContainer';
import ItemDetailContainer from './Components/Items/ItemDetailContainer';

function App() {
  /*const logeoConsola = (a)=>console.log(a);
  logeoConsola("Componente Padre")*/
  return (
    <div className="App">
      <NavBar /*logeo={logeoConsola}*//>
      {/* <Input name='Nombre' id='nombreValor' title='Tu nombre'/> */}
      <ItemListContainer greeting="Lista de items"/>
      <ItemDetailContainer/>
      <MiComponente/>
    </div>
  );
}

export default App;
