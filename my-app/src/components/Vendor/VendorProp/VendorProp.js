import React, { useState,useEffect } from "react";
import Navbar from "./Navbar";
import Events from "./Events";
import "./VendorProp.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function VendorProp() {
  const navigate = useNavigate();
  const [proposals , setProposals] = useState([]);
 const [vendorName , setVendorName] = useState("");
 const getVendorData = () =>{
  fetch("/vendordata",{
    method:"POST",
    crossDoamin : true,
    headers:{"content-type":"application/json","accept":"application/json","Access-Control-Allow-Origin" : "*"},
    body:JSON.stringify({
      token: localStorage.getItem("VendorToken"),
    }
    )
})
.then((res)=>res.json())
.then((data)=>{

  console.log(data);
 setVendorName(data.data.name)
 console.log(vendorName)
 })
 

.catch((err)=>{
  console.log(err)})
 }

 const getProposals =() =>{
  fetch("/proposals",{
    method:"GET",
    crossDoamin : true,
    headers:{"content-type":"application/json","accept":"application/json","Access-Control-Allow-Origin" : "*"},
    
})
.then((res)=>res.json())
.then((data) =>{
  setProposals(data)
  })
  .catch((err)=>{
  console.log(err)})
 }

  useEffect(()=>{
        // getVendorData();
         getProposals();
        if(!localStorage.getItem("vendorToken")){
          navigate('/')
        }
  },[])

 
  return (
    <div>
      <Navbar/>
      <div className="propcontainer">
        <div className="container1">
          <div className="proposal">
            <b>Proposals</b>
          </div>
          <div className="searchbar">
            <div className="searchimg"></div>
            <input type="text" placeholder="Search Projects" />
          </div>
          <div className="filter">
            <div className="filimg"></div>
            <div className="create-btn">
              <button><Link to='/createproposal' style={{textDecoration:'none',color:'white'}}>CREATE</Link></button>
            </div>
          </div>
        </div>
        <div className="container2">
          {proposals.map((item) => {
            return <Events key={item._id}  id={item._id} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default VendorProp;
