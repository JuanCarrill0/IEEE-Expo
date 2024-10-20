import "./Button.css"

const Button = ({onClick}) =>{
    return(
        <button className="button-card" onClick={onClick}>
            <span role="img">🛒</span> Add to Cart
        </button>
    )
}

export default Button;