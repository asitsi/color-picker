import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrap>
      <h1>
        {" "}
        <span>404</span> Error [ This Page doesn't exist ]
      </h1>
      <Link to="/" className="link">
        Go Back
      </Link>
    </Wrap>
  );
};

export default Error;

const Wrap = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 3rem;
    span {
      font-size: 5rem;
    }
    @media (max-width: 768px) {
      font-size: 3rem;
      padding: 0 1rem;
      span {
        font-size: 3rem;
      }
    }
  }
  .link {
    font-size: 5rem;
    text-decoration: none;
    @media (max-width: 336px) {
      font-size: 3rem;
    }
  }
`;
