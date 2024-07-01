import React from "react";

const Button = ({ text, disabled, className }) => {
  return (
    <button
      disabled={disabled}
      className={`${className} p-3 rounded-md text-white bg-primary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50`}
    >
      {text}
    </button>
  );
};

export default Button;
