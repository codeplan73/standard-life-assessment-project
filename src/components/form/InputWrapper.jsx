import PropTypes from "prop-types";

const InputWrapper = ({ children }) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

InputWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InputWrapper;
