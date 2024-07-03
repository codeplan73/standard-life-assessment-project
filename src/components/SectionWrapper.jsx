import PropTypes from "prop-types";

const SectionWrapper = ({ children }) => {
  return <div className="container px-4 mx-auto">{children}</div>;
};

SectionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionWrapper;
