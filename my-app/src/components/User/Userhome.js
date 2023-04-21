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
                <input type="name" placeholder="Phone/Email" style={{width:'300px'}}/>{" "}
              </div>
              <div className="input">
                {" "}
                <input type="password" placeholder="Password" style={{width:'300px'}} />{" "}
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
                  <Link to='/Userproposals' style={{textDecoration:'none',color:'white'}}>
                <button className="button" type="submit">Sign In
                </button>
                  </Link>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Userhome
