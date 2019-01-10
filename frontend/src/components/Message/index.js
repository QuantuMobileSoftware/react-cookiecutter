import React from "react";
import PropTypes from "prop-types";

const Message = ({ title, children, className, ...rest }) => {
  return (
    <div className={`center mw5 mw6-ns hidden ba mv4 ${className}`} {...rest}>
      <h1 className="f4 bg-near-black white mv0 pv2 ph3">{title}</h1>
      <div className="pa3 bt">
        <p className="f6 f5-ns lh-copy measure mv0">{children}</p>
      </div>
    </div>
  );
};

Message.propTypes = {
  title: PropTypes.string
};

export default Message;
