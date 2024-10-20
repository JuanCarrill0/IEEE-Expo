
import Button from "./Button";
import { useContext } from "react";
import { CartContext } from "../services/CartContext";
import "./ProductCard.css"

const ProductCard = ({image, title, description, price}) =>{

    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
      addToCart({ title, price });
    };

    return(
        <div className="product-card">
            <img className="product-image" src= {image} alt=""></img>
            <Button onClick={handleAddToCart}/>
            <div className="product-info">
                <h2 className="product-title">{title}</h2>
                <p className="product-description">{description}</p>
                <p className="product-price">{price}</p>
            </div>
        </div>
    )
}

export default ProductCard;