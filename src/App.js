import './App.css';
import ItemListContainer from './components/ItemListContainer.js'
import NavBar from './components/NavBar.js';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer greeting="Soy ItemListContainer"/>
    </div>
  );
}

export default App;
