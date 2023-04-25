import React, { useEffect, useState } from 'react';
import UserNav from './UserNav';
import Proposal from './Proposal';
import { useNavigate } from "react-router-dom";
import { useContext } from "react"
import { Context } from "./Context"



function Userprop() {
  const navigate = useNavigate();
  const [proposal, setProposal] = useState([])
  const { select } = useContext(Context)
  // const [vendor,setVendor]=useState([]);
  console.log(typeof(select)=="object");



 



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


  useEffect(() => {
    getProposaldata();
    if (!localStorage.getItem("vendorToken") && !localStorage.getItem("userToken")) {
      navigate('/User')
    }
  }, [])


  const logout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userloggedIn');
    navigate('/User')
  }



  return (<>
    <div>
      <UserNav logout={logout} />
      <div className='userimg'></div>
      <div >
        {(typeof (select) == "object") ?
          <div>
            <div className='selected'>
              <p style={{
                fontsize: '20px',
                position: "relative",
                top: "254px",
                left: "200px"
              }}>Selected</p>
              <div className='selectcontainer' ></div>
            </div>

            <div className='proposalcontainer'>
              {
                proposal.map((item, i) => {
                  return <Proposal key={i} data={item} />
                })
              } </div> </div> : <div>
            {
              proposal.map((item, i) => {
                return <Proposal key={i} data={item} />
              })
            }
          </div>

          }
      </div> 

    </div>
  </>
  )
}

export default Userprop
