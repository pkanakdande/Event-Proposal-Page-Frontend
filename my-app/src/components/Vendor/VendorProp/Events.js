import React from "react";
import "./Events.css";
import { Link } from "react-router-dom";
import editIcon from "../../../images/pencil-edit-button.jpg";
import deleteIcon from "../../../images/bin.jpg";




function Events({data,id}) {
  
  let Id = id
  console.log(Id)
  
   async function deleteEvent(){
    fetch("/deleteproposal",{
      method:"DELETE",
      crossDoamin : true,
      headers:{"content-type":"application/json","accept":"application/json","Access-Control-Allow-Origin" : "*"},
      body:JSON.stringify(Id)
  })
  .then((res)=>res.json())
  .then((data)=>{
  
    console.log(data);
   
   console.log()
   })
   
  
  .catch((err)=>{
    console.log(err)})
   }
  

  return (
    <div className="event-container">
      <div className="eventname">
        {data.eventName}<br />
        {data.description}
      </div>

      <div className="eventdetails">
        <div className="eventtype">
          <p style={{ color: "#AAAAAA", lineHeight: "0pt" }}>Event Type</p>
          {data.eventType}
        </div>
        <div className="proposaltype">
          <p style={{ color: "#AAAAAA", lineHeight: "0pt" }}>Proposal Type</p>
          {data.proposalType}
        </div>
        <div className="fromdate">
          <p style={{ color: "#AAAAAA", lineHeight: "0pt" }}>From Date</p>
          {data.fromDate}
        </div>
        <div className="todate">
          <p style={{ color: "#AAAAAA", lineHeight: "0pt" }}>To Date</p>
          {data.toDate}
        </div>
        <div className="budget">
          <p style={{ color: "#AAAAAA", lineHeight: "0pt" }}>Budget</p>{data.budget}
        </div>{" "}
        <div className="eventimg">
          <div className="editimg" >   <Link to='/createproposal' ><img src={editIcon}></img> </Link></div>
          <div className="deleteimg"> <img src={deleteIcon} onClick={deleteEvent} ></img></div>
        </div>
      </div>
    </div>
  );
}

export default Events;
