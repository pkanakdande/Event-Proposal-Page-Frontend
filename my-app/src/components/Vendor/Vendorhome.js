import React from "react";
import { Link } from "react-router-dom";
import "./Vendorhome.css";
import Home from "../Home/Home";
import Userhome from "../User/Userhome";

function VendorHome() {
    return (<>
        <Home/>
        <div className="Logo">LOGO</div>
        <div className="Text">TEXT WILL<br/> BE DISPLAYED<br/> HERE</div>
        <div className="form-box">
          <div className="top">
            <p className="vendor">Vendor</p>
            <Link to="/User" style={{textDecoration:'none', marginTop:'15px'}}>User</Link>
          </div>

          <div className="heading">
            <h2>Sign in your Account</h2>
          </div>
          <div className="form">
            <form method="post">
              <div className="input">
                {" "}
                <input type="name" placeholder="Phone/Email" />{" "}
              </div>
              <div className="input">
                {" "}
                <input type="password" placeholder="Password" />{" "}
              </div>
              <div className="forget">
                {" "}
                <Link to="/forgetPassword" style={{textDecoration:'none'}}>Forget Password</Link>{" "}
              </div>

              <div className="footer">
                <div className="create">
                  {" "}
                  <Link to="/createvendoraccount" style={{textDecoration:'none'}}>Create Account</Link>{" "}
                </div>
                <Link to='/VendorProposal'>
                <button className="button" type="submit">
                  SIGN IN
                </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
    </>
  );
}

export default VendorHome;
