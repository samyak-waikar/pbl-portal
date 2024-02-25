import React,{useState} from 'react'
import './login.css'
import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import Background from '../Background/Background'
import { Link } from 'react-router-dom'
const Login = () => {

    const [action,setAction] = useState("Sign Up");
    return (
        <div className="container">
            <Background/>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"? <div></div>:<div className="input">
                    <img src={user_icon} alt="user" />
                    <input type="text" placeholder='Name' />
                </div>}
                
                <div className="input">
                    <img src={email_icon} alt="email" />
                    <input type="email" placeholder='Email' />
                </div>
                <div className="input">
                    <img src={password_icon} alt="password" />
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className="forgot">Forgot password?</div>}
            {action==="Sign Up"?<div></div>:<div className="forgot" onClick={()=>{setAction("Sign Up")}}>New User?</div>}
            {action==="Login"?<div></div>:<div className="forgot" onClick={()=>{setAction("Login")}}>Already A User?</div>}
            
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} ><Link to = "/" className="link">Sign Up</Link></div>
                <div className={action==="Login"?"submit gray":"submit"} ><Link to = "/" className="link">Login</Link></div>

            </div>
        </div>
    );
}

export default Login
