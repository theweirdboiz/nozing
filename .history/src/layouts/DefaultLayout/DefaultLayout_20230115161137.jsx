import React from "react";
import PropTypes from "prop-types";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Header />
      {children}
      <Queue />
      <Player />
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
