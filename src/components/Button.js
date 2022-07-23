import './Button.css'

const Button = ({ children, color, handleClick }) => {
    return (
        <button className="button-nav" onClick={ handleClick }>
            { children }
        </button>
    );
}

export default Button;
