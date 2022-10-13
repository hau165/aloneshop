import { Component } from "react";
import React, { useState } from "react";
import data from '../data'
import "../ProductFolder/Products.css";
import banner from "../Images/banner_1.jpg";
import ContainerItem from "../ContainerItem";

function ProductsHeadphone() {
    const [active, setActive] = useState("Sản phẩm");
    return (
        <div>
            <div className="mainPage_banner">
                <img className="mainPage_banner-img" src={banner} alt="banner"/>
            </div>

            <div className="container__products">
                <div className="container__products-nav">
                    <button>Tai nghe</button>
                    <button>Bàn phím</button>
                    <button>Chuột</button>
                    <button>Sạc / Cáp</button>
                    <button>Sạc dự phòng</button>
                    <button>Loa</button>
                </div>

                <div className="container__products-products">
                    {data[3].map(item => ContainerItem(item.image, item.name, item.price))}
                </div>
            </div>

        </div>
    );
}

export default ProductsHeadphone;
