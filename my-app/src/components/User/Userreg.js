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
            <form method="post" style={{margin:'0px 0px 0px 0px'}}>
                <div className="input">
                    {" "}
                    <input type="text" placeholder="Name" style={{width:'86%'}}/>
                </div>
                <div className="input">
                    {" "}
                    <input type="email" placeholder="Email" style={{width:'86%'}}/>
                </div>
                <div className="input">
                    {" "}
                    <input type="number" placeholder="Contact" style={{width:'86%'}}/>
                </div>
                <div className="input">
                    {" "}
                    <input type="password" placeholder="Password" style={{width:'86%'}}/>
                </div>
                <div className="input">
                    {" "}
                    <input type="password" placeholder="Confirm Password" style={{width:'86%'}}/>
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
