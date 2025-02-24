import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header/header"
import Login from "./components/auth/Login"
import Product from "./components/products/product"
import Register from "./components/auth/register"

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/products" element={<Product/>}/>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  )
}

export default App
