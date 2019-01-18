import React from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";
import styles from "./Message.module.css";

const Message = props => {
  const { title, children, className, ...rest } = props;

  const cn = ["message", className].filter(item => item).join(" ");

  return (
    <div className={cn} {...rest}>
      <div className="center relative mw5 mw6-ns hidden ba mv4">
        {props.onClose && (
          <button className={styles.button} onClick={props.onClose}>
            <Icon className="w-100 h-100" name="close" color="white" />
          </button>
        )}
        <h1 className="f4 bg-near-black white mv0 pv2 ph3">{title}</h1>
        <div className="pa3 bt">
          <p className="f6 f5-ns lh-copy measure mv0">{children}</p>
        </div>
      </div>
    </div>
  );
};

Message.propTypes = {
  title: PropTypes.string
};

export default Message;
