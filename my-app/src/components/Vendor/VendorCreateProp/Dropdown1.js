import React from "react";
import "./Dropdown.css";
import styled from "styled-components";
import { useState } from "react";

const Main = styled("div")`
  font-family: sans-serif;
  height: 100px;
`;

const DropDownContainer = styled("div")`
  width: 10.5em;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: gray;
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;


function Dropdown1() {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <>
      <div>
        <Main>
          <p>Proposal Type</p>
          <DropDownContainer>
            <DropDownHeader onClick={toggling}>Select</DropDownHeader>
            {isOpen && (
              <DropDownListContainer>
                <DropDownList>
                  <ListItem>Marriage</ListItem>
                  <ListItem>Birthday</ListItem>
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>
        </Main>
      </div>
    </>
  );
}

export default Dropdown1;
