import './App.css';
import ItemCount from './components/ItemCount.js';
import ItemListContainer from './components/ItemListContainer.js'
import NavBar from './components/NavBar.js';

function App() {
    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} unidades`);
    }

    return (
        <div className="App">
            <NavBar/>
            <ItemListContainer greeting="Soy ItemListContainer"/>
            <ItemCount onAdd={ handleOnAdd } stock={ 4 }/>
        </div>
    );
}

export default App;
