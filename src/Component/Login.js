import React from 'react'
import { Link } from 'react-router-dom';
import './Login1.css';

export default function Login() {
  return (
    
    <div className="wrapper bg-white">
    <div className="h2 text-center">Trinity</div>
    <div className="h4 text-muted text-center pt-2">Enter your login details</div>
    <form className="pt-3">
        <div className="form-group py-2">
            <div className="input-field"> <span className="far fa-user p-2"></span> <input type="text" placeholder="Username or Email Address" required className=""/> </div>
        </div>
        <div className="form-group py-1 pb-2">
            <div className="input-field"> <span className="fas fa-lock p-2"></span> <input type="password" placeholder="Enter your Password" required className=""/> <button className="btn bg-white text-muted"> <span className="far fa-eye-slash"></span> </button> </div>
        </div>
        <div className="d-flex align-items-start">
            <div className="remember"> <label className="option text-muted"> Remember me <input type="radio" name="radio"/> <span className="checkmark"></span> </label> </div>
            <div className="ml-auto" > <Link to="/forget" id="forgot">Forgot Password? </Link> </div>
        </div> <button className="btn btn-block text-center my-3"><Link to="/home" >Log in</Link> </button>
        <div className="text-center pt-3 text-muted">Not a member? <Link to="/Signup">Sign up</Link></div>
    </form>
</div>
  )
}
