import React, { useEffect, useState } from "react";
import UserNav from "./UserNav";
import Proposal from "./Proposal";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./Context";

function Userprop() {
  const navigate = useNavigate();
  const [proposal, setProposal] = useState([]);
  const { select } = useContext(Context);
  // const [getselected , setGetSelected] = useState([]);
  // const [vendor,setVendor]=useState([]);
  // console.log(select.length===0 ? "false" : "true");
//   console.log(select._id)
//  console.log(getselected)
  // const selectedProposal = ()=>{
  //   fetch(`/getselectedproposals/${select._id}`, {
  //     method: "GET",
  //     crossDoamin: true,
  //     headers: {
  //       "content-type": "application/json",
  //       accept: "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },

  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //     setGetSelected(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  

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
  // useEffect(() => {
  //   selectedProposal();
   
  // }, [select]);


  useEffect(() => {
    // selectedProposal();
    getProposaldata();
    if (
      !localStorage.getItem("vendorToken") &&
      !localStorage.getItem("userToken")
    ) {
      navigate("/User");
    }
  }, []);

 

  return (
    <>
      <div>
        <UserNav  />
        <div className="userimg"></div>
        <div>
          {!(select.length===0) ? (
            <div>
              <div className="selected">
                <p
                  style={{
                    fontsize: "20px",
                    position: "relative",
                    top: "0px",
                    left: "0px",
                  }}
                >
                  Selected
                </p>
                <div className="selectcontainer">
                  <div className="userproposal">
                    <div className="prop-img">
                      <img
                        src={select.image}
                        alt=""
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <Link
                      to={`/Proposaldetail/${select._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        className="venname"
                        style={{ margin: "0px 0px 0px 10px", fontSize: "18px" }}
                      >
                        {select.eventName}
                      </div>
                      <div
                        className="budge"
                        style={{ fontSize: "13px", margin: "0px 0px 0px 10px" }}
                      >
                        {select.budget}
                      </div>
                      <div
                        className="locatin"
                        style={{ marginLeft: "10px", fontSize: "14px" }}
                      >
                        {select.placeOfEvent}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <p style={{ position: "relative", top: "288px", left: "154px" }}>
                Proposals
              </p>
              <div className="proposalcontainer">
                {proposal.map((item, i) => {
                  return <Proposal key={i} data={item} />;
                })}{" "}
              </div>{" "}
            </div>
          ) : (
            <div>
              <p style={{ position: "relative", top: "288px", left: "154px" }}>Proposals</p>
            <div className="proposalcontainer">
              {proposal.map((item, i) => {
                return <Proposal key={i} data={item} />;
              })}
            </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Userprop;
