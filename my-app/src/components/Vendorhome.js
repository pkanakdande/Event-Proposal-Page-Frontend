
import React from "react";
import './Vendorhome.css';
import { Link } from "react-router-dom";



const Vendorhome = () => {

    return (
        <div className="main">
            <div className="form-box">
                <div className="top">
                     <p className="vendor" >Vendor</p>
                     <p className="user">User</p>
                </div>

             <div className="heading"><h2>Sign in your Account</h2></div>
           <div className="form">
             <form  method="post" >
               <div className="input"> <input type="name" placeholder="Phone/Email"/> </div>
               <div className="input"> <input type="password" placeholder="Password"/> </div>
               <div className="forget"> <Link to="/forgetPassword">Forget Password</Link> </div>

                <div className="footer">
                <div className="create" > <Link to="/createaccount">Create Account</Link> </div> 
               <button className="button" type="submit">SIGN IN</button> 
               </div>
                

             </form>

             </div>
             </div>
           </div>


        
    )

}

export default Vendorhome;