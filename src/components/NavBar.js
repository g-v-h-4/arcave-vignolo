import './NavBar.css'
import Button from './Button.js'
import CartWidget from './CartWidget.js'

const NavBar = () => {
    return (
        <nav>
            <div className="nav-upper">
                <h1 className="h1-brand-title">ARCAVE</h1>
                <CartWidget/>
            </div>
            <div className="nav-lower">
                <Button>TOP SELLERS</Button>
                <Button>ARCADE</Button>
                <Button>PINBALL</Button>
            </div>
        </nav>
    );
}

export default NavBar;
