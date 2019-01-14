import React from "react";

const icons = {
  close: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M 5.9902344 4.9902344 A 1.0001 1.0001 0 0 0 5.2929688 6.7070312 L 10.585938 12 L 5.2929688 17.292969 A 1.0001 1.0001 0 1 0 6.7070312 18.707031 L 12 13.414062 L 17.292969 18.707031 A 1.0001 1.0001 0 1 0 18.707031 17.292969 L 13.414062 12 L 18.707031 6.7070312 A 1.0001 1.0001 0 0 0 17.980469 4.9902344 A 1.0001 1.0001 0 0 0 17.292969 5.2929688 L 12 10.585938 L 6.7070312 5.2929688 A 1.0001 1.0001 0 0 0 5.9902344 4.9902344 z"
        white-space="normal"
        overflow="visible"
      />
    )
  }
};

const Icon = ({ name, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox={icons[name].viewBox} {...rest}>
    {icons[name].path}
  </svg>
);

export default Icon;
