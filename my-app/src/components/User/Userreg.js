import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home/Home'

function Userreg() {
  return (
    <div>
      <div>
      <Home />
      <div className="Logo">LOGO</div>
      <div className="Text">
        TEXT WILL
        <br /> BE DISPLAYED
        <br /> HERE
      </div>
      <div className="form-box-reg">
        <div className="top">
        <Link to="/" style={{textDecoration:'none', marginTop:'15px'}}>Vendor</Link>
        <p style={{}}>User</p>
        </div>
        <div className="heading">
            <h2>Register in your account</h2>
          </div>
          <div className="form">
            <form method="post">
                <div className="input">
                    {" "}
                    <input type="text" placeholder="Name"/>
                </div>
                <div className="input">
                    {" "}
                    <input type="email" placeholder="Email"/>
                </div>
                <div className="input">
                    {" "}
                    <input type="number" placeholder="Contact"/>
                </div>
                <div className="input">
                    {" "}
                    <input type="password" placeholder="Password"/>
                </div>
                <div className="input">
                    {" "}
                    <input type="password" placeholder="Confirm Password"/>
                </div>

                <div className="regfooter">
                <div className="signin">
                  {" "}
                  <Link to="/User" style={{textDecoration:'none'}}>Sign In</Link>{" "}
                </div>
                <button className="regbutton" type="submit">
                  REGISTER
                </button>
              </div>
            </form>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Userreg
