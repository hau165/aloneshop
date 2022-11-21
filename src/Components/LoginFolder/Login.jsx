import "./Login.css";
import FbIcon from "../Images/facebook.ico";
import GgIcon from "../Images/google.ico";
import logo from "../Images/logo.png";
import { NavLink as Link } from "react-router-dom";
import React, { useState } from "react";
function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  return (

    <div className="loginmain">
      <div className="logomain">
        <img className="logo" src={logo} alt="logo"></img>
        <p>AloneSharks</p>
      </div>

      <div className="loginForm">
        <h3>Đăng nhập</h3>
        <form action="">
          <input type="text" placeholder='Tên đăng nhập' onChange={(event) => setEmaillog(event.target.value)} />
          <input type="password" placeholder='Mật khẩu' onChange={(event) => setPasswordlog(event.target.value)} />
          <button>Đăng nhập</button>
        </form>
        <br></br>
        <Link to='/Register'><p>Bạn chưa có tài khoản? Đăng ký ngay </p></Link>
        <p>Hoặc đăng nhập bằng</p>
        <div className="loginForm-icon">
          <button>
            <img src={FbIcon} alt="facebook icon" />
            Facebook
          </button>
          <button>
            <img src={GgIcon} alt="facebook icon" />
            Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
