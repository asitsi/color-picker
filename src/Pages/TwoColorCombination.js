import React from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Data from "./Data";
import Home from "../Components/Home";

const TwoColorCombination = () => {
  const value = Data.slice(0, 34);
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
              {element.colorCombination.map((subElement, index) => {
                return (
                  <Card
                    classname="card"
                    key={index}
                    style={{ background: `${subElement.bgColor}` }}
                  >
                    <div className="img">
                      <img src={subElement.img} alt="img" className="img" />
                    </div>
                    <div className="content">
                      <CopyToClipboard text={subElement.first}>
                        <Button
                          type="button"
                          style={{
                            background: `${subElement.first}`,
                          }}
                        >
                          <div>{subElement.first}</div>
                        </Button>
                      </CopyToClipboard>
                      {subElement.second === "" ? (
                        ""
                      ) : (
                        <CopyToClipboard text={subElement.second}>
                          <Button
                            type="button"
                            style={{
                              background: `${subElement.second}`,
                            }}
                          >
                            <div>{subElement.second}</div>
                          </Button>
                        </CopyToClipboard>
                      )}
                      {subElement.third === "" ? (
                        ""
                      ) : (
                        <CopyToClipboard text={subElement.third}>
                          <Button
                            type="button"
                            style={{
                              background: `${subElement.third}`,
                            }}
                          >
                            <div>{subElement.third}</div>
                          </Button>
                        </CopyToClipboard>
                      )}

                      <CopyToClipboard text={subElement.last}>
                        <Button
                          type="button"
                          style={{
                            background: `${subElement.last}`,
                          }}
                        >
                          <div>{subElement.last}</div>
                        </Button>
                      </CopyToClipboard>
                    </div>
                  </Card>
                );
              })}
            </div>
          );
        })}
      </Content>
    </Wrap>
  );
};

export default TwoColorCombination;

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
const Content = styled.div``;
const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 0;
  width: 100%;
  padding: 2rem 0;
  border-radius: 5px;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    display: block;
    padding: 0;
  }
  .img {
    width: 100%;
    height: 15rem;
    margin-right: 1rem;
    border-radius: 5px;
    @media (max-width: 768px) {
      .img {
        width: 100%;
        height: 300px;
        margin-top: 0;
      }
    }
  }

  .content {
    display: flex;
    @media (max-width: 768px) {
      display: block;
      margin-top: 3.8rem;
    }
  }
`;
const Button = styled.button`
  height: 15rem;
  /* height: 100%; */
  width: 10rem;
  clip-path: inset(0 0 0 0);
  border-radius: 5px;
  background-color: #ffffff;
  color: #ffffff;
  margin: 0 0.5rem;
  font-size: 2rem;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  transition: transform 0.5s ease-out;
  :hover {
    transform: translateY(-10px);
    box-shadow: 5px 10px #999999;
    font-size: 2.2rem;
    width: 100%;
  }
  @media (max-width: 768px) {
    height: auto;
    /* height: 100%; */
    width: 100%;
    margin: 0;
  }
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;
