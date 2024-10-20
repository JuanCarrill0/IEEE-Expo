import ProductCard from "../components/ProductCard";
import imageBrownie from "../assets/image-brownie-desktop.jpg"
import imageCake from "../assets/image-cake-desktop.jpg"

import "./Product-List.css"
const ProductList = () =>{

    // Lista de productos (puedes expandirla)
    const products = [
        {
        image: imageBrownie,
        title: 'Baklava Tablet',
        description: 'Deliciosa baklava en presentación de tablet.',
        price: 10.99,
        },
        {
        image: imageCake, // Otro producto
        title: 'Producto 2',
        description: 'Descripción del producto 2.',
        price: 19.99,
        },
        {
        image: imageCake, // Otro producto
        title: 'Producto 2',
        description: 'Descripción del producto 2.',
        price: 19.99,
        },
        {
        image: imageCake, // Otro producto
        title: 'Producto 2',
        description: 'Descripción del producto 2.',
        price: 19.99,
        },
        
    ];

    return(
        <div className="products">
            {products.map((product, index) => (
                <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                />
            ))}
        </div>
    )
}

export default ProductList;