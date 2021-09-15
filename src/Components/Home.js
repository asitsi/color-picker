import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <h1>Click To Copy {props.code}</h1>
      <Content>
        <Link to={props.link} className="Link">
          Hexa Code
        </Link>
        <Link to={props.link3} className="Link">
          Gradient Color
        </Link>
        <Link to={props.link4} className="Link">
          Color Combination
        </Link>
      </Content>
    </div>
  );
};

export default Home;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
  .Link {
    width: 15rem;
    padding: 1rem 0;
    border: 1px solid #000;
    text-decoration: none;
    color: #333;
    background-color: #fff;
    @media (max-width: 768px) {
      display: block;
      width: 100%;
    }
    :hover {
      background: radial-gradient(circle, red, black);
      color: #fff;
      border: none;
    }
  }

  @media (max-width: 768px) {
    display: block;
  }
`;
