import { Component } from "react";
import React, { useState } from "react";
import data from '../data'
import "./Products.css";
import banner from "../Images/banner_1.jpg";
import ContainerItem from "../ContainerItem";

function ProductsMouse() {

    return (
       

                <div className="container__products-products">
                    {data[5].map(item => ContainerItem(item.image, item.name, item.price))}
                </div>
    );
}

export default ProductsMouse;
