import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Sidebar from "@layouts/components/Sidebar";
import Header from "@layouts/components/Header";
import Queue from "@layouts/components/Queue";
import Player from "@layouts/components/Player";
import { useDispatch } from "react-redux";

import songsSlice from "@redux/songsSlice";

const DefaultLayout = ({ children }) => {
  const dispatch = useDispatch();

  const handleBgHeader = (e) => {
    const position = e.target.scrollTop;
    if (position < 1) {
      dispatch(songsSlice.actions.setIsBg(false));
    } else {
      dispatch(songsSlice.actions.setIsBg(true));
    }
  };

  return (
    <div className="bg-layout-bg text-[#fff]">
      <div className="flex items-center h-[calc(100vh_-_9rem)] overflow-hidden">
        <Sidebar />
        <div className="relative flex-col w-full h-full">
          <Header />
          <div className="relative inset-0 overflow-hidden w-full h-full">
            <div
              onScroll={handleBgHeader}
              className="absolute inset-0 flex-grow sidebar-scrollbar h-full scrollbar-thin scrollbar-thumb-secondary scrollbar-hide scrollbar-thumb-rounded-lg"
            >
              <div className="h-full">{children}</div>
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
