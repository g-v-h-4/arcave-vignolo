import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import ItemListContainer from './components/ItemListContainer.js'
import NavBar from './components/NavBar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={ <ItemListContainer greeting="Todos los productos"/> }/>
                    <Route path="/category/:categoryId" element={ <ItemListContainer greeting="Filtrado"/> } />
                    <Route path="/detail/:productId" element={ <ItemDetailContainer/> }/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
