import React from "react";
import PropTypes from "prop-types";

const Queue = () => {
  return (
    <aside className="fixed right-0 top-0 w-[33rem] bottom-[9rem] bg-queue-player-bg shadow-box-shadow-queue">
      <div className="py-[1.4rem]">
        <div className="flex gap-x-2">
          <div className="">
            <div className="flex items-center">
              <span>Danh sách phát</span>
            </div>
            <div className="">
              <span>Nghe gần đây</span>
            </div>
          </div>
          <button></button>
          <button></button>
        </div>
      </div>
    </aside>
  );
};

Queue.propTypes = {};

export default Queue;
