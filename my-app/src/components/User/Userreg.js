import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home/Home'


function Userreg() {
  
  const [formdata,setformdata]=useState({
    name:"",
    email:"",
    contact:"",
    password:"",
    conformpassword:""
  })

  function dataChange(e,propName){
    let temp=e.target.value
    setformdata(data =>({
     ...data,[propName]:temp
    }))
    
     }
     

     async function submitreg(e){
      e.preventDefault()
      // const data=new FormData(e.target)
      console.log(formdata)


       fetch("http://localhost:4000/user/register",{
        method:"POST",
        headers:{"content-type":"application/json","accept":"application/json"},
        body:JSON.stringify(formdata)
        
    })
    .then((data)=>data.json())
    .then((responce)=>console.log(responce))
    .catch((error)=>console.log(error.message))
     }
     

     

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
            <form method="post"  onSubmit={submitreg}>
                <div className="input">
                    {" "}
                    <input type="text" placeholder="Name" name='name' 
                onChange={e=>dataChange(e,"name")} />
                </div>
                <div className="input">
                    {" "}
                    <input type="email" placeholder="Email" name='email' 
                    onChange={e=>dataChange(e,"email")}/>
                </div>
                <div className="input">
                    {" "}
                    <input type="text" placeholder="Contact" name='contact' 
                 onChange={e=>dataChange(e,"contact")} />
                </div>
                <div className="input">
                    {" "}
                    <input type="password" placeholder="Password" name='password' 
                    onChange={e=>dataChange(e,"password")}/>
                </div>
                <div className="input">
                    {" "}
                    <input type="password" placeholder="Confirm Password" name='conformpassword'
                     onChange={e=>dataChange(e,"conformpassword")}/>
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
