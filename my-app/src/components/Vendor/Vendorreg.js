import React, { useState } from "react";
import Home from "../Home/Home";
import { Link } from "react-router-dom";

function Vendorreg() {

  const [regForm,setRegForm]=useState({
    name:"",
    email:"",
    contact:"",
    password:"",
    conformpassword:""
  })

  function updateData(e,propName){
    let temp=e.target.value
    setRegForm(data =>({
     ...data,[propName]:temp
    }))
    
     }

     async function submitform(e){
      e.preventDefault()
      // const data=new FormData(e.target)
      console.log(regForm)


       fetch("http://localhost:4000/register",{
        method:"POST",
        headers:{"content-type":"application/json","accept":"application/json"},
        body:JSON.stringify(regForm)
        
    })
    .then((data)=>data.json())
    .then((responce)=>console.log(responce))
    .catch((error)=>console.log(error.message))
     }
  


  return (
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
          <p className="vendor">Vendor</p>
          <Link
            to="/User"
            style={{ textDecoration: "none", marginTop: "15px" }}
          >
            User
          </Link>
        </div>
        <div className="heading">
            <h2>Register in your account</h2>
          </div>
          <div className="form">
            <form method="post" onSubmit={submitform}>
                <div className="input">
                    {" "}
                    <input type="text" placeholder="Name" name="name"
                     onChange={e=>updateData(e,"name")} required/>
                </div>
                <div className="input">
                    {" "}
                    <input type="email" placeholder="Email" name="email" 
                    onChange={e=>updateData(e,"email")} required/>
                </div>
                <div className="input">
                    {" "}
                    <input type="text" placeholder="Contact" name="contact" 
                    onChange={e=>updateData(e,"contact")} required/>
                </div>
                <div className="input">
                    {" "}
                    <input type="password" placeholder="Password" name="password" 
                    onChange={e=>updateData(e,"password")} required/>
                </div>
                <div className="input">
                    {" "}
                    <input type="password" placeholder="Confirm Password" name="conformpassword"
                     onChange={e=>updateData(e,"conformpassword")} required/>
                </div>

                <div className="regfooter">
                <div className="signin">
                  {" "}
                  <Link to="/" style={{textDecoration:'none'}}>Sign In</Link>{" "}
                </div>
                <button className="regbutton" type="submit">
                  REGISTER
                </button>
              </div>
            </form>
          </div>
      </div>
    </div>
  );
}

export default Vendorreg;
