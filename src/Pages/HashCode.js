import React, { useState } from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Data from "./Data";
import Home from "../Components/Home";
import Popup from "../Components/Popup";
import { CircularProgress } from "@mui/material";

const HashCode = () => {
  const value = Data;
  const [Copyed, setCopyed] = useState("");
  const [ButtonPopup, setButtonPopup] = useState(false);
  const [Display, setDisplay] = useState("none");

  const popupcall = () => {
    setDisplay("block");
    const timer = setTimeout(() => {
      setDisplay("none");
      setCopyed(`copyed <i class="fas fa-check-circle"></i>`);
    }, 1000);
    return () => clearTimeout(timer);
  };

  return (
    <Wrap>
      <Home
        code={"Code"}
        link={"/"}
        link3={"/Gradients"}
        link4={"/TwoColorCombination"}
      />
      <Content>
        {value.map((element, index) => {
          return (
            <div key={index}>
              <Button
                type="button"
                style={{ background: `${element.HEXCode}` }}
                onClick={() => {
                  setButtonPopup(index);
                }}
                rgba={element.RGBACode}
              >
                {/* {element.HEXCode} */}
              </Button>
              <Popup
                trigger={ButtonPopup === index}
                setTrigger={setButtonPopup}
                setCopyed={setCopyed}
                Color={element.HEXCode}
                className="Popup"
              >
                <h1
                  style={{
                    display: `${Display}`,
                  }}
                >
                  <CircularProgress
                    style={{
                      color: `${element.RGBACode}`,
                    }}
                    thickness="5"
                  />
                </h1>
                <h1
                  style={{
                    color: `${element.RGBACode}`,
                  }}
                  dangerouslySetInnerHTML={{ __html: `${Copyed}` }}
                ></h1>
                <CopyToClipboard text={element.HEXCode}>
                  <StyledButton
                    type="btn"
                    color={element.HEXCode}
                    onClick={() => popupcall()}
                  >
                    HEX Code {element.HEXCode}
                  </StyledButton>
                </CopyToClipboard>
                <CopyToClipboard text={element.RGBACode}>
                  <StyledButton
                    type="btn"
                    color={element.HEXCode}
                    onClick={popupcall}
                  >
                    {element.RGBACode}
                  </StyledButton>
                </CopyToClipboard>
              </Popup>
            </div>
          );
        })}
      </Content>
    </Wrap>
  );
};

export default HashCode;

const Wrap = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
  h1 {
    text-align: center;
  }
`;
const Content = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 250px;
  grid-gap: 0.5rem;
  grid-row-gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
`;
const Button = styled.button`
  /* min-height: 20rem;
  width: 200px; */
  height: 250px;
  width: 200px;
  padding: 0 1.5rem;
  background: red;
  color: #ffffff;
  font-size: 2rem;
  border: none;
  outline: none;
  border-radius: 5%;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  transition: transform 0.5s ease-out;
  :hover {
    transform: translateY(-10px);
    box-shadow: ${props => props.rgba.replace(/[^,]+(?=\))/, 0.4)} 0px 5px, ${props => props.rgba.replace(/[^,]+(?=\))/, 0.3)} 0px 10px, ${props => props.rgba.replace(/[^,]+(?=\))/, 0.2)} 0px 15px, ${props => props.rgba.replace(/[^,]+(?=\))/, 0.1)} 0px 20px, ${props => props.rgba.replace(/[^,]+(?=\))/, 0.05)} 0px 25px;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0;
  }
  @media (max-width: 500px) {
    font-size: 1.2rem;
    width: 150px;
  }
  @media (max-width: 400px) {
    width: 140px;
    padding: 0 1rem;
  }
  @media (max-width: 300px) {
    width: 100px;
    padding: 0 0.2rem;
  }
`;
const StyledButton = styled.button`
  display: block;
  padding: 1rem;
  margin: 2rem 1rem;
  width: 96%;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
