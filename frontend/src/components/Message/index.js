import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "../Icon";

const Message = props => {
  const { title, children, className, ...rest } = props;

  const cn = ["message", className].filter(item => item).join(" ");

  return (
    <div className={cn} {...rest}>
      <div className="center relative mw5 mw6-ns hidden ba mv4">
        {props.onClose && (
          <Message.CloseButton onClick={props.onClose}>
            <Icon className="w-100 h-100" name="close" color="white" />
          </Message.CloseButton>
        )}
        <h1 className="f4 bg-near-black white mv0 pv2 ph3">{title}</h1>
        <div className="pa3 bt">
          <p className="f6 f5-ns lh-copy measure mv0">{children}</p>
        </div>
      </div>
    </div>
  );
};

Message.CloseButton = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  fill: #ffffff;
  padding: 0;
  right: 5px;
  top: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

Message.propTypes = {
  title: PropTypes.string
};

export default Message;
