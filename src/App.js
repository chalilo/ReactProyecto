import './App.css';
import NavBar from './Components/Header/NavBar';
//import Input from './Components/Input';
import MiComponente from './Components/MiComponente';
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './Components/ItemCount';

function App() {
  /*const logeoConsola = (a)=>console.log(a);
  logeoConsola("Componente Padre")*/
  return (
    <div className="App">
      <NavBar /*logeo={logeoConsola}*//>
      {/* <Input name='Nombre' id='nombreValor' title='Tu nombre'/> */}
      <ItemListContainer greeting="Lista de items"/>
      {/* {<MiComponente miProp="Contador" logeoB={logeoConsola}/>} */}
    </div>
  );
}

export default App;
