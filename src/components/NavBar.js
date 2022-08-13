import './NavBar.css'
import CartWidget from './CartWidget.js'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <div className="nav-upper">
                <Link to="/" className="h1-brand-title">ARCAVE</Link>
                <CartWidget/>
            </div>
            <div className="nav-lower">
                <Link className="nav-button" to="/category/top">TOP SELLERS</Link>
                <Link className="nav-button" to="/category/arcade">ARCADE</Link>
                <Link className="nav-button" to="/category/pinball">PINBALL</Link>
            </div>
        </nav>
    );
}

export default NavBar;
