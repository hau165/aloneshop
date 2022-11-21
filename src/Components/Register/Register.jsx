import "./Register.css"
import React,{ useState } from "react";
import logo from "../Images/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink as Link } from "react-router-dom";

function Register()
{   
    let history = useNavigate();
    const [user, setUser] = useState({
        username:"",
        fullname:"",
        email:"",
        password:""
    });
    const {username,fullname,email,password}=user;

    const handleChange=(e)=>{
        setUser({...user,[e.target.name]: e.target.value})
    }

    
    const handleSumbit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/AloneShark/Register.php",user)
        .then ((result)=>{
            console.log(result.data.status);
            if(result.data.status =='valid'){
                alert('There is problem')
            }
            else{
                history('/MainPage');
            }
        });
    };
    return(
        <div className="regismain">
            <div className="logomain">
                <img className="logo" src={logo} alt="logo"></img>
                <p>AloneSharks</p>
            </div>

            <div className="regisForm">
                <h3>Đăng ký</h3>
                <form onSubmit={e => handleSumbit(e)}>
                    <input type="text" name="username" placeholder="Tên đăng nhập" 
                    value={username} onChange={e => handleChange(e)}/>
                    <input type="text" name="fullname" placeholder="Họ và tên" 
                    value={fullname} onChange={e => handleChange(e)}/>
                    <input type="email" name="email"placeholder="Email" value={email} onChange={e => handleChange(e)}/>
                    <input type="password" name="password"placeholder="Mật khẩu" value={password} onChange={e => handleChange(e)}/>
                    <button type="submit" name="submit">Đăng ký</button>
                </form>
                <Link to="/Login"><p>Bạn đã có tài khoản? Đăng nhập ngay </p></Link>
            </div>

        </div>
    );
}
export default Register;