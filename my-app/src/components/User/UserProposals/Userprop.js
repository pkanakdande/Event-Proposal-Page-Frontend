import React, { useEffect, useState } from 'react';
import UserNav from './UserNav';
import Proposal from './Proposal';
import { useNavigate } from "react-router-dom";



function Userprop() {
    const navigate = useNavigate();
    const [proposal,setProposal]=useState({})
    const [vendor,setVendor]=useState([]);

  
    // console.log(proposal);

 

    const getvendorProposaldata = () => {
        fetch("/vendordataandproposal", {
          method: "GET",
          crossDoamin: true,
          headers: {
            "content-type": "application/json",
            accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setProposal(data);
          })
          .catch((err) => {
            console.log(err);
          });
      };

     

    useEffect(()=>{
        getvendorProposaldata();
        if( !localStorage.getItem("vendorToken") && !localStorage.getItem("userToken")){
            navigate('/User')
          }
    },[])
    
    
 const logout=()=> {
    localStorage.removeItem('userToken');
  localStorage.removeItem('userloggedIn');
  navigate('/User')
  }
 


  return (
    <div>
      <UserNav logout={logout}/>
      <div className='userimg'></div>
      <div className='proposalcontainer'>

        {/* {proposal?.vendordata && <div>Hello</div>} */}
        {
            proposal?.vendordata.map((item, index)=>{
                return (
                <div key={index}><Proposal vendordata={item} proposaldata={proposal?.proposaldata[index]} /></div>
                )
            })
        }
        
      </div>
    </div>
  )
    }

export default Userprop
