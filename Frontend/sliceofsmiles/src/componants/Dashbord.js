import { NavLink } from "react-router-dom";
import "./css/dashbord.css";

const Dashbord = () => {
  return (
    <div className="dash-body">
      <nav className="main-nav">
        <h2>Logo</h2>
        
        <nav className="sec-nav">
          <NavLink to="/login" className="register-link">About Us</NavLink>
          <h4>Products</h4>
          <h4>Contact Us</h4>
          <h4>Cart</h4>
          <h4>Hi Guest</h4>
        </nav>
      </nav>
    </div>
  );
};
export default Dashbord;
