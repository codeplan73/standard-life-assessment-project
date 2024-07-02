import PropTypes from "prop-types";

const ErrorMessage = ({ children }) => {
  return <p className="text-xs text-red-600 font-extralight">{children}</p>;
};

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorMessage;
