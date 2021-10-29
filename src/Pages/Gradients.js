import React, { useState } from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Data from "./Data";
import Home from "../Components/Home";
import GradientPopup from "../Components/GradientDataPopup";

const Gradients = () => {
  const value = Data.slice(0, 10);
  const [ButtonPopup, setButtonPopup] = useState(false);

  const Display = () => {
    setButtonPopup(true);
    setTimeout(() => {
      setButtonPopup(false);
    }, 1000);
  };

  return (
    <Wrap>
      <Home
        code={"Color Combination Code "}
        link={"/"}
        link3={"/Gradients"}
        link4={"/TwoColorCombination"}
      />
      <Content>
        {value.map((element, index) => {
          return (
            <div key={index}>
              <CopyToClipboard text={element.Gradients2} className="margins">
                <Button
                  type="button"
                  style={{
                    background: `${element.Gradients1}`,
                  }}
                >
                  <div>{element.Gradients2}</div>
                </Button>
              </CopyToClipboard>
              <CopyToClipboard
                text={element.Gradients1 + " " + element.Gradients2}
                className="margins1"
              >
                <Button
                  type="button"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, ${element.Gradients1}, ${element.Gradients2})`,
                  }}
                  onClick={Display}
                >
                  <div>{element.Gradients1}</div>
                  {element.Gradients2}
                  <GradientPopup
                    trigger={ButtonPopup}
                    setTrigger={setButtonPopup}
                    Color1={element.Gradients1}
                  ></GradientPopup>
                </Button>
              </CopyToClipboard>
              <CopyToClipboard text={element.Gradients1}>
                <Button
                  type="button"
                  style={{
                    background: `${element.Gradients2}`,
                  }}
                >
                  <div>{element.Gradients1}</div>
                </Button>
              </CopyToClipboard>
            </div>
          );
        })}
      </Content>
    </Wrap>
  );
};

export default Gradients;

const Wrap = styled.div`
  font-family: "Poppins", sans-serif;
  display: grid;
  place-items: center;
  padding: 0 2rem;
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
  h1 {
    text-align: center;
  }
  .margins {
    margin-bottom: 1rem;
  }
  .margins1 {
    margin-bottom: 1rem;
    height: 13rem;
  }
`;
const Content = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 350px;
  grid-gap: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    width: 95%;
  }
`;
const Button = styled.button`
  /* min-height: 20rem;
  width: 200px; */
  height: 100%;
  width: 100%;
  background-color: #ffffff;
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
    font-size: 2.2rem;
  }
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;
