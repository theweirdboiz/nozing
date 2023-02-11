import React from "react";
import PropTypes from "prop-types";

import Sidebar from "@layouts/components/Sidebar";
import Header from "@layouts/components/Header";
import Queue from "@layouts/components/Queue";
import Player from "@layouts/components/Player";

const DefaultLayout = ({ children }) => {
  return (
    <div className="bg-layout-bg text-[#fff]">
      <div className="flex items-center h-[calc(100vh_-_9rem)] overflow-hidden">
        <Sidebar />
        <div className="relative flex-col w-full h-full">
          <Header />
          <div className="relative inset-0 overflow-hidden w-full h-full">
            <div className="absolute inset-0 flex-grow sidebar-scrollbar h-full scrollbar-thin scrollbar-thumb-secondary scrollbar-thumb-rounded-lg">
              <div className="mt-[7rem] pt-[2rem] h-full">{children}</div>
            </div>
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
