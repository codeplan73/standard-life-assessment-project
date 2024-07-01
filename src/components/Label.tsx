import React from "react";

const Label = ({ id, label }) => {
  return (
    <label htmlFor={id} className="text-grayTwo">
      {label}
    </label>
  );
};

export default Label;
