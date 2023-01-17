import React from "react";
import PropTypes from "prop-types";

import Sidebar from "../components/Sidebar/Sidebar";
import Header from "@layouts/components/Header";
import Queue from "../components/Queue";
import Player from "../components/Player";

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
