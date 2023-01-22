import React from "react";
import PropTypes from "prop-types";

import Sidebar from "@layouts/components/Sidebar";
import Header from "@layouts/components/Header";
import Queue from "@layouts/components/Queue";
import Player from "@layouts/components/Player";

const DefaultLayout = ({ children }) => {
  return (
    <div className="bg-layout-bg text-[#fff]">
      <div className="flex items-center">
        <Sidebar />
        <Header />
        <div className="relative flex-grow min-h-full w-[calc(100% - 57rem)]">
          <div className="relative overflow-hidden w-full h-full">
            {children}
          </div>
        </div>
        <Queue />
      </div>
      <Player />
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
