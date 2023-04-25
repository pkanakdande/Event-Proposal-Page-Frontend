import { useEffect, useState, navigate } from "react";
import React from "react";
import "./Proposal.css";
import { Link } from "react-router-dom";

function Proposal(props) {
  
  console.log("props : ",props);
  // const [vendor,setVendor]=useState([]);

  // const getVendordata= () =>{
  //   fetch("/vendordata",{
  //       method:"GET",
  //       crossDoamin:true,
  //       headers:{
  //           "content-type":"application/json",
  //           accept: "application/json",
  //           "Access-Control-Allow-Origin":"*",
  //       },
  //   })
  //   .then((res) => res.json())
  //     .then((data) => {
  //       setVendor(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  //   useEffect(()=>{
  //     getVendordata();
  //     // if( !localStorage.getItem("vendorToken") && !localStorage.getItem("userToken")){
  //     //     navigate('/User')
  //     //   }
  // },[])
  // console.log(props)

  // <div className="userproposal">
  return (
    <>
      {/* <div className='prop-img'>
            <img src={props.data.image} alt='img.jpg'/>
          </div> */}
     

          <div className="userproposal">
          <Link to="/Proposaldetail" style={{ textDecoration: "none" }}>
            <div className="venname">{props.data.eventName}</div>
            <div className="budge">{props.data.budget}</div>
            <div className="locatin">{props.data.placeOfEvent}</div>
          </Link>
          </div>
  
    
  </>
  );
}

export default Proposal;
