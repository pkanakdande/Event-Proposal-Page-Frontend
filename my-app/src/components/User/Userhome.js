import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home/Home'

function Userhome() {
  return (
    <div>
        <Home/>
        <div className="Logo">LOGO</div>
        <div className="Text">TEXT WILL<br/> BE DISPLAYED<br/> HERE</div>
        <div className="form-box">
          <div className="top">
          <Link to="/" style={{textDecoration:'none', marginTop:'15px'}}>Vendor</Link>
            <p style={{}}>User</p>
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
                  <Link to="/createuseraccount" style={{textDecoration:'none'}}>Create Account</Link>{" "}
                </div>
                <button className="button" type="submit">
                  SIGN IN
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Userhome
