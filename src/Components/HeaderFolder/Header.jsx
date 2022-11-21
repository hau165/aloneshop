
import "./Header.css";
import logo from "../Images/logo.png";
import shoppingIcon from "../Images/shopping-icon.png";
import searchIcon from "../Images/black-search-icon.png";
import MainPage from "../MainPageFolder/MainPage";
import Products from "../ProductFolder/Products";
import AboutUs from "../AboutUsFolder/AboutUs";
import Shopping from "../Shopping/Shopping";
import Register from "../Register/Register";
import ShipAddress from "../ShipAddress/ShipAddress";
import { NavLink as Link, NavLink } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../LoginFolder/Login";

function Header() {
    return (
        <Router>
             
            <div className="header">
                <div className="header-left">
                    <a href="#" >
                        <img src={logo} alt="Logo"/>
                        <h2>AloneSharks</h2>
                    </a>
                </div>

                <div className="header-nav_menu">
                    <button id="#"><NavLink to="/MainPage">Trang chủ</NavLink></button>
                    <button><NavLink to="/Products">Sản phẩm</NavLink></button>
                    <button><NavLink to="/AboutUs">Giới thiệu</NavLink></button>
                </div>

                <div className="header-right">
                    <div className="header-right_search">
                        <form action="">
                            <input type="text" placeholder="Nhập tên sản phẩm cần tìm" />
                            <button><img src={searchIcon} /></button>
                        </form>
                    </div>

                    <div className="header-right_item">
                        <button> <NavLink to="/Shoppingcart"><img src={shoppingIcon} alt="Shopping" /></NavLink> </button>
                        <button className="logIn-btn"><NavLink to="/Login">Đăng nhập</NavLink></button>
                    </div>
                </div>
            </div>         
            <div className="container">
                <Routes>
                    <Route path="/" element={<MainPage/>}></Route>
                    <Route path='/MainPage' element={<MainPage />} />
                    <Route path='/Products' element={<Products />} />
                    <Route path='/AboutUs' element={<AboutUs />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path="/Shoppingcart" element={<Shopping/>}/>
                    <Route path='/Register' element={<Register />} />
                    <Route path='/ShipAddress' element={<ShipAddress/>} />
                </Routes>
            </div>
        </Router>

    );

}

export default Header;
