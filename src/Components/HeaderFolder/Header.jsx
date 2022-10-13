import { Component } from "react";
import React, { useState } from "react";
import "./Header.css";
import logo from "../Images/logo.png";
import shoppingIcon from "../Images/shopping-icon.png";
import searchIcon from "../Images/black-search-icon.png";
import MainPage from "../MainPageFolder/MainPage";
import Products from "../ProductFolder/Products";
import AboutUs from "../AboutUsFolder/AboutUs";
// import banner from "../Images/banner.jpg";
import { NavLink as Link, NavLink } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Header() {
    return (
        <Router>
            <div className="header">
                <div className="header-left">
                    <a href="#">
                        <img src={logo} />
                        <h2>Shark Shop</h2>
                    </a>
                </div>

                <div className="header-nav_menu">
                    <button ><NavLink to="/MainPage">Trang chủ</NavLink></button>
                    <button ><NavLink to="/Products">Sản phẩm</NavLink></button>
                    <button ><NavLink to="/AboutUs">Giới thiệu</NavLink></button>
                </div>

                <div className="header-right">
                    <div className="header-right_search">
                        <form action="">
                            <input type="text" placeholder="Nhập tên sản phẩm cần tìm" />
                            <button><img src={searchIcon} /></button>
                        </form>
                    </div>

                    <div className="header-right_item">
                        <button><img src={shoppingIcon} /></button>
                        <button className="logIn-btn">Đăng nhập</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <Routes>
                    <Route path='/MainPage' element={<MainPage />} />
                    <Route path='/Products' element={<Products />} />
                    <Route path='/AboutUs' element={<AboutUs />} />
                </Routes>
            </div>

        </Router>

    );

}

export default Header;
