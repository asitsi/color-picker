import React, { useState } from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Data from "./Data";
import Home from "../Components/Home";
import Popup from "../Components/Popup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HashCode = () => {
  const value = Data;
  const [ButtonPopup, setButtonPopup] = useState(false);

  const OnCoped = () => {
    toast.success("Copied", {
      position: "top-right",
      autoClose: 2000,
      theme: "colored",
    });
  };

  return (
    <Wrap>
      <ToastContainer />
      <Home
        code={"Code"}
        link={"/My-favourite-color-combination"}
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
                onClick={() => setButtonPopup(index)}
              >
                {element.HEXCode}
              </Button>
              <Popup
                trigger={ButtonPopup === index}
                setTrigger={setButtonPopup}
                className="Popup"
              >
                <CopyToClipboard text={element.HEXCode}>
                  <StyledButton
                    type="btn"
                    color={element.HEXCode}
                    onClick={OnCoped}
                  >
                    HEX Code {element.HEXCode}
                  </StyledButton>
                </CopyToClipboard>
                <CopyToClipboard text={element.RGBACode}>
                  <StyledButton
                    type="btn"
                    color={element.HEXCode}
                    onClick={OnCoped}
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
    grid-gap: 2rem;
    grid-row-gap: 1.5rem;
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
    box-shadow: 5px 10px #999999;
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
    width: 120px;
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
  width: 90%;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
`;
