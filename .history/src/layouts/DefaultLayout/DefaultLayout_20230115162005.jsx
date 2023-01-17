import React from "react";
import PropTypes from "prop-types";

import Sidebar from "@layouts/components/Sidebar";
import Header from "@layouts/components/Header";
import Queue from "@layouts/components/Queue";
import Player from "@playouts/components/Player";

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
