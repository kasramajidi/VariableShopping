import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header/header"
import Login from "./components/auth/Login"
import Register from "./components/auth/register"
import ProductList from './components/products/ProductList';
import { CartProvider } from './components/products/CartContext';

function App() {
  return (
    <CartProvider> 
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
