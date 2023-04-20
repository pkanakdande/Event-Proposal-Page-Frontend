import React, { useState } from "react";
import Navbar from "./Navbar";
import Events from "./Events";
import "./VendorProp.css";
import { Link } from "react-router-dom";

function VendorProp() {
  const events = [
    {
      eventname: "Event Name",
      eventtext: "lorem sdasdasdsadasdasdsadasdsadsadasdsadsadsadasdsadsad",
      eventtype: "Marriage",
      proposaltype: "Venue",
      fromdate: "12/02/2222",
      todate: "14/02/2222",
      budget: "20000",
    },
    {
      eventname: "Event Name",
      eventtext: "lorem sdasdasdsadasdasdsadasdsadsadasdsadsadsadasdsadsad",
      eventtype: "Marriage",
      proposaltype: "Venue",
      fromdate: "12/02/2222",
      todate: "14/02/2222",
      budget: "23000",
    },
    {
      eventname: "Event Name",
      eventtext: "lorem sdasdasdsadasdasdsadasdsadsadasdsadsadsadasdsadsad",
      eventtype: "Marriage",
      proposaltype: "Venue",
      fromdate: "12/02/2222",
      todate: "14/02/2222",
      budget: "23000",
    },
  ];

  return (
    <div>
      <Navbar />
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
          {events.map((item, i) => {
            return <Events data={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default VendorProp;
