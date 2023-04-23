import React from "react";
import "./Events.css";
import { Link } from "react-router-dom";
import editIcon from "../../../images/pencil-edit-button.jpg";
import deleteIcon from "../../../images/bin.jpg";


function Events(props) {
 
  return (
    <div className="event-container">
      <div className="eventname">
        {props.data.eventname}<br />
        {props.data.eventext}
      </div>

      <div className="eventdetails">
        <div className="eventtype">
          <p style={{ color: "#AAAAAA", lineHeight: "0pt" }}>Event Type</p>
          {props.data.eventtype}
        </div>
        <div className="proposaltype">
          <p style={{ color: "#AAAAAA", lineHeight: "0pt" }}>Proposal Type</p>
          {props.data.proposaltype}
        </div>
        <div className="fromdate">
          <p style={{ color: "#AAAAAA", lineHeight: "0pt" }}>From Date</p>
          {props.data.fromdate}
        </div>
        <div className="todate">
          <p style={{ color: "#AAAAAA", lineHeight: "0pt" }}>To Date</p>
          {props.data.todate}
        </div>
        <div className="budget">
          <p style={{ color: "#AAAAAA", lineHeight: "0pt" }}>Budget</p>{props.data.budget}
        </div>{" "}
        <div className="eventimg">
          <div className="editimg" >   <Link to='/createproposal' ><img src={editIcon}></img> </Link></div>
          <div className="deleteimg"> <img src={deleteIcon}></img></div>
        </div>
      </div>
    </div>
  );
}

export default Events;
