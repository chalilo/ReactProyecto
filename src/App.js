import './App.css';
import NavBar from './Components/Header/NavBar';
import Input from './Components/Input';

function App() {
  const logeoConsola = (a)=>console.log(a);
  logeoConsola("Componente Padre")
  return (
    <div className="App">
      <NavBar logeo={logeoConsola}/>
    </div>
  );
}

export default App;
