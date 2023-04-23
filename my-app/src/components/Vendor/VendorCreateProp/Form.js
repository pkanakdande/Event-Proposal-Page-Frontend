import React from "react";
import "./Form.css";


function Form() {



  return (
    <div className="form1">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <b>CREATE PROPOSAL</b>
      </div>
      <form method="post">
        <div className="container1form">
          <div>
            <p>Event Name</p>
            <input type="text" style={{ width: "467px" }} />
          </div>
          <div className="placeofeventdropdown">
            <div style={{ marginRight: "153px" }}>
              <p>Place of Event</p>
              <select
                name="place of event"
                style={{ width: "165px", height: "38px" }}
              >
                <option value=""></option>
                <option value="marriage">Banglore</option>
                <option value="birthday">Delhi</option>
              </select>
            </div>
            <div style={{ marginRight: "153px" }}>
              <p>Proposal Type</p>
              <select
                name="proposal type"
                style={{ width: "165px", height: "38px" }}
              >
                <option value=""></option>
                <option value="marriage">Marriage</option>
                <option value="birthday">Birthday</option>
              </select>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "153px" }}>
              <p>Event Type</p>
              <select
                name="event type"
                style={{ width: "165px", height: "38px" }}
              >
                <option value=""></option>
                <option value="marriage">Marriage</option>
                <option value="birthday">Birthday</option>
              </select>
            </div>
            <div>
              <p>Budget</p>
              <input
                type="text"
                placeholder="0000"
                style={{ width: "149px", height: "15px" }}
              />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "153px" }}>
              <p>From</p>
              <input type="date" style={{ width: "146px", height: "28px" }} />
            </div>
            <div>
              <p>To</p>
              <input type="date" style={{ width: "146px", height: "28px" }} />
            </div>
          </div>
          <div>
            <p>Description</p>
            <input type="text" style={{ width: "468px", height: "122px" }} />
          </div>
        </div>
        <div className="containerform2">
          <div style={{ height: "275px" }}>
            <p className="zupp">Images <button>Add</button><input type="file" name="Add"/></p>
            <div className="containerform2grid">
              <div style={{ border: "2px solid black" }}>
                <img src="../../../images/icons8-filter-64.png" alt="img.jpg" />
              </div>
              <div style={{ border: "2px solid black" }}>
                <img src="../../../images/icons8-filter-64.png" alt="img.jpg" />
              </div>
              <div style={{ border: "2px solid black" }}>
                <img src="../../../images/icons8-filter-64.png" alt="img.jpg" />
              </div>
              <div style={{ border: "2px solid black" }}>
                <img src="../../../images/icons8-filter-64.png" alt="img.jpg" />
              </div>
              <div style={{ border: "2px solid black" }}></div>
              <div style={{ border: "2px solid black" }}></div>
              <div style={{ border: "2px solid black" }}></div>
              <div style={{ border: "2px solid black" }}></div>
              <div style={{ border: "2px solid black" }}></div>
              <div style={{ border: "2px solid black" }}></div>
            </div>
          </div>
          <div>
            <p>Food Preferences</p>
            <input type="text" style={{ width: "525px", height: "57px" }} />
          </div>
          <div>
            <p>Events</p>
            <input type="text" style={{ width: "525px", height: "116px" }} />
          </div>
        </div>
        <button style={{ margin: "20px 3px 0px 482px" }}>Add</button>
      </form>
    </div>
  );
}

export default Form;
