import React, { useState } from 'react';
import './App.css';
import Header from './Components/HeaderFolder/Header'
import MainPage from './Components/MainPageFolder/MainPage'
import Product from './Components/ProductFolder/ProductsHeadphone'
import AboutUs from './Components/AboutUsFolder/AboutUs'
import Footer from './Components/FooterFolder/Footer'
import Login from './Components/LoginFolder/Login'
// import Contact from './Components/Contact'

function App() {
  const [active, setActive] = useState("MainPage")
  return (
    <div className="App">
        <div><Header/></div>
        <div className='container'>
          <div><MainPage/></div>
          <div><Product/></div>
          <div><AboutUs/></div>
          <div><Login/></div>
        </div>

        <div><Footer/></div>
    </div>
  );
}

export default App;
