import { NavLink } from "react-router-dom";
import "./css/registration.css";

const Register = () => {
  return (
    <div className="for-reg-bg">
    <div className="register-wrapper">
      <div className="register-form">
        <h2>Registeration</h2>
        <form action="#">
        <div className="input-box">
            <span className="icon"></span>
            <input type="text" required></input>
            <label>First Name</label>
          </div>
          {/* <div className="input-box">
            <span className="icon"></span>
            <input type="text" required></input>
            <label>Username</label>
          </div> */}
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
          <div className="input-box">
            <span className="icon"></span>
            <input type="password" required></input>
            <label>Confirm Password</label>
          </div>
          <button type="submit" className="btn">
            Register
          </button>

          <div className="login-register">
            <p>
              Already have an account?
              <NavLink to="/login" className="login-link">Login</NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};
export default Register;
