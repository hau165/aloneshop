import { Component } from "react";
import React, { useState } from "react";
import "../AboutUsFolder/AboutUs.css";
function Header() {
  return (
    <div className="aboutUs">
      <div className="aboutUs__nav">
        <h4 className="aboutUs__nav-name">DANH MỤC TRANG</h4>
        <div className="aboutUs__nav-main">
          <button>Tìm kiếm</button>
          <button>AloneSharks® /SỰ KHỞI ĐẦU/</button>
          <button>CHÍNH SÁCH BẢO HÀNH</button>
          <button>Phương thức thanh toán</button>
          <a href="tinhte.vn">Tinhte.vn</a>
          <a href="kenh14.vn">Kenh14.vn</a>
        </div>
      </div>

      <div className="aboutUs__main">
        <h4>AloneSharks &reg; / SỰ KHỞI ĐẦU/</h4>
        <p>Smart Stuff - Smart Life</p>
        <p>
          AloneSharks&reg; cung cấp các sản phẩm phụ kiện công nghệ thông minh, chất
          lượng và thiết thực trong cuộc sống. Hành trình xây dựng thương hiệu
          được khách hàng tin chọn, ngay khi có nhu cầu tìm kiếm những phụ kiện
          công nghệ thông minh chỉ vừa bắt đầu!
        </p>
        <p>
          Với cam kết sản phẩm chất lượng, chế độ bảo hành tin cậy và đề cao
          trải nghiệm của quý khách, AloneSharks&reg; hi vọng trở thành người bạn
          thân và không ngừng phục vụ, truyền cảm hứng để khách hàng "chill hết
          nấc, xài hết ga" với những sản phẩm công nghệ thông minh.
        </p>
        <p>
          1St Flagship Store: Trường Đại học Công nghệ Thông tin - ĐHQG TPHCM.
          <br />Phone Number: 0799684120
          <br />Mail: AloneSharks.Corner@gmail.com
          <br />Instagram: @AloneSharks.vn
        </p>
      </div>
    </div>
  );
}

export default Header;
