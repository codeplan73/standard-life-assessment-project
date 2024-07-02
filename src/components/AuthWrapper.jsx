import PropTypes from "prop-types";
import { Footer, Navbar } from "../components/index";

const AuthWrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

AuthWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthWrapper;
