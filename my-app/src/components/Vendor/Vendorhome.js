import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Vendorhome.css";
import Home from "../Home/Home";
import Userhome from "../User/Userhome";

function VendorHome() {

 
  const [formData,setFormData]=useState({
    email:"",
    password:""
  })
 

  function updateData(e,propName){
    let temp=e.target.value
    setFormData(data =>({
     ...data,[propName]:temp
    }))
    
     }
  // function updateData(e,[propName]){
  //   let temp=e.target.value
  //   setFormData(data => ({
  //     ...data,[propName]: temp
  //   }))
  // }

  async function submitted(e){
    e.preventDefault()
    // const data=new FormData(e.target)
    console.log(formData)


     fetch("http://localhost:4000/user/login",{
      method:"POST",
      headers:{"content-type":"application/json","accept":"application/json"},
      body:JSON.stringify(formData)
      
  })
  .then((data)=>data.json())
  .then((responce)=>console.log(responce))
  .catch((error)=>console.log(error.message))
   }

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
            <form method="post" onSubmit={submitted}>
              <div className="input">
                {" "}
                <input type="name" name="email" placeholder="Phone/Email" 
                 onChange={e=>updateData(e,"email")} />{" "}
              </div>
              <div className="input">
                {" "}
                <input type="password" placeholder="Password" name="password"
                onChange={e=>updateData(e,"password")}  />{" "}
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
                <button className="button" type="submit">
                  SIGN IN
                </button>
              </div>
            </form>
          </div>
        </div>
    </>
  );
}

export default VendorHome;
