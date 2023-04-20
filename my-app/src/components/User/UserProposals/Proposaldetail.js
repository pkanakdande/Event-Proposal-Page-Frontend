import React from "react";
import "./Proposaldetail.css";
import UserNav from "./UserNav";

function Proposaldetail() {
  return (
    <>
      <UserNav />
      <div className="line"></div>
      <div className="proposaldetailcontainer"> 
      <div className="proposaldetailtop">
        <div className="proposaltext">Proposals &lt;</div>
        <div className="John">
          <b>John Contract</b>
        </div>
      </div>
      <div className="prop-details">
        <div id="one"></div>
        <div id="two"></div>
        <div id="three"></div>
        <div id="four"></div>
        <div id="five"></div>
        <div id="six"></div>
        <div id="seven"></div>
        <div id="eight"></div>
        <div id="nine"></div>
        <div id="ten"></div>
        <div id="eleven"></div>
      </div>
      </div>
    </>
  );
}

export default Proposaldetail;
