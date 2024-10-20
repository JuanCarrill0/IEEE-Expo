import './App.css';
import ProductList from './pages/Product-List';
import { CartProvider } from './services/CartContext';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <CartProvider>
          <h1>Tienda de productos</h1>
          <ProductList />
          <Cart />
      </CartProvider>
    </div>
  );
}

export default App;
