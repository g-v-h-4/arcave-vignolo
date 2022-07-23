import './NavBar.css'
import Button from './Button.js'

const NavBar = () => {
    return (
        <nav>
            <div className="nav-upper">
                <h1 className="h1-brand-title">ARCAVE</h1>
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
