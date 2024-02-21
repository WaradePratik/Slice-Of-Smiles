import { NavLink } from "react-router-dom";
import "./css/login.css";

const Login = () => {
  return (
    <div className="for-bg">
    <div className="login_main">
      <header>
        <h2 className="sos">Slice Of Smiles</h2>
        <nav className="navigation">
          <NavLink to="/register" className="register-link">
            Home
          </NavLink>
          <NavLink to="" className="register-link">
            About
          </NavLink>
          <NavLink to="/register" className="register-link">
            Services
          </NavLink>
          <NavLink to="/register" className="register-link">
            Contact
          </NavLink>
          <button className="btnLogin">Login</button>
        </nav>
      </header>
      <div className="wrapper">
        <div className="login-form">
          <h2>Login</h2>
          <form action="#">
            <div className="input-box">
              <span className="icon"></span>
              <input type="email" required></input>
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon"></span>
              <input type="password" required></input>
              <label>Password</label>
            </div>
            <div className="forgot">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <div className="login-register">
              <p>
                Don't have an account?
                <NavLink to="/register" className="register-link">
                  Register
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Login;
