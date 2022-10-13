import { Component } from "react";
import React, { useState } from "react";
import "../HeaderFolder/Header.css";
import logo from "../Images/logo.png";
import shoppingIcon from "../Images/shopping-icon.png";
import searchIcon from "../Images/black-search-icon.png";
import MainPage from "../MainPageFolder/MainPage";
import Products from "../ProductFolder/Products";
import AboutUs from "../AboutUsFolder/AboutUs";
// import banner from "../Images/banner.jpg";


function Header() {
    const [active, setActive] = useState("MainPage")
  return (
    <div className="header">
        <div className="header-left">
            <a href="#">
                <img src={logo}/>
                <h2>Shark Shop</h2>
            </a>
        </div>

        <div className="header-nav_menu">
            <button href={MainPage} onClick={() => setActive("MainPage")}>Trang chủ</button>
            <button href={Products} onClick={() => setActive("Products")}>Sản phẩm</button>
            <button href={AboutUs} onClick={() => setActive("AboutUs")}>Giới thiệu</button>
        </div>

        <div className="header-right">
            <div className="header-right_search">
                <form action="">
                    <input type="text" placeholder="Nhập tên sản phẩm cần tìm"/>
                    <button><img src={searchIcon}/></button>
                </form>
            </div>
            
            <div className="header-right_item">
                <button><img src={shoppingIcon}/></button>
                <button className="logIn-btn">Đăng nhập</button>
            </div>
      </div>
    </div>
  );
}

export default Header;
