import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Shop from './pages/Shop'
import men_banner from "./Asset/banner_mens.png"
import women_banner from "./Asset/banner_women.png"
import kid_banner from "./Asset/banner_kids.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>} />
      <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>} />
      <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>} />
      <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>} />
      <Route path='/product' element={<Product/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignup/>} />

    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
