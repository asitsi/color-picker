import React from "react";
import styled from "styled-components";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const Popup = (props) => {
  return props.trigger ? (
    <Wrap className="popup">
      <div
        className="popup_inner"
        style={{
          color: `${props.Color2}`,
        }}
      >
        <button
          className="close_btn"
          onClick={() => {
            props.setTrigger(false);
            props.setCopyed("");
          }}
        >
          Copyed <CheckBoxIcon className="close_btn_icon"></CheckBoxIcon>
        </button>
        {props.children}
      </div>
    </Wrap>
  ) : (
    ""
  );
};

export default Popup;

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(11, 11, 11, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  .popup_inner {
    position: relative;
    padding: 1rem 0;
    width: 100%;
    max-width: 200px;
    height: 30px;
    background-color: #fff;
    margin: 0 1rem;
    border-radius: 5px;
    .close_btn {
      position: absolute;
      top: 10px;
      right: 30%;
      background: none;
      color: #02b3e4;
      border: none;
      font-size: 2rem;
      cursor: pointer;
      .close_btn_icon {
        position: absolute;
        top: 5px;
        left: 100%;
        color: green;
        font-size: 2rem;
      }
    }
  }
`;
