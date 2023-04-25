import React, { useEffect, useState } from 'react';
import UserNav from './UserNav';
import Proposal from './Proposal';
import { useNavigate } from "react-router-dom";
import Proposaldetail from './Proposaldetail';



function Userprop() {
    const navigate = useNavigate();
    const [proposal,setProposal]=useState([])
    // const [vendor,setVendor]=useState([]);

  
    // console.log(proposal);

 

    const getProposaldata = () => {
        fetch("/proposals", {
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
// console.log(proposal)
     

    useEffect(()=>{
        getProposaldata();
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
      <div id='selected'></div>
      <div className='proposalcontainer'>

        {/* {proposal?.vendordata && <div>Hello</div>} */}
        {/* {
            proposal?.map((item, index)=>{
                return (
                <div key={index}><Proposal data={item} /></div>
                )
            })
        } */}
        {
          proposal.map((item,i)=>{
            <Proposaldetail key={i} data={item}/>
            return <Proposal key={i} data={item}/>
          })
        }
        {/* <Proposal {...proposal}/> */}
        
      </div>
    </div>
  )
    }

export default Userprop
