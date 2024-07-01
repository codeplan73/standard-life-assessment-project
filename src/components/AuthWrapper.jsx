import React from "react";
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

export default AuthWrapper;
