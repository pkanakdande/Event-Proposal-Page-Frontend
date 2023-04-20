import React from 'react'
import UserNav from './UserNav'
import Proposal from './Proposal'

function Userprop() {
    const proposal=[
        {
            image:'../../../images/party-people-enjoy-concert-at-festival-summer-DHDMPWH.jpg',
            vendorname:'Vendor Name',
            budget:'23000',
            location:'Banglore'
        },
        {
            image:'../../../images/party-people-enjoy-concert-at-festival-summer-DHDMPWH.jpg',
            vendorname:'Vendor Name',
            budget:'23000',
            location:'Patna'
        },
        {
            image:'../../../images/party-people-enjoy-concert-at-festival-summer-DHDMPWH.jpg',
            vendorname:'Vendor Name',
            budget:'23000',
            location:'Delhi'
        },{
            image:'../../../images/party-people-enjoy-concert-at-festival-summer-DHDMPWH.jpg',
            vendorname:'Vendor Name',
            budget:'23000',
            location:'Banglore'
        },
        {
            image:'../../../images/party-people-enjoy-concert-at-festival-summer-DHDMPWH.jpg',
            vendorname:'Vendor Name',
            budget:'23000',
            location:'Banglore'
        },
        {
            image:'../../../images/party-people-enjoy-concert-at-festival-summer-DHDMPWH.jpg',
            vendorname:'Vendor Name',
            budget:'23000',
            location:'Banglore'
        }
    ]


  return (
    <div>
      <UserNav/>
      <div className='userimg'></div>
      <div className='proposalcontainer'>
        {
            proposal.map((item,i)=>{
                return <Proposal data={item}/>
            })
        }
        
      </div>
    </div>
  )
}

export default Userprop
