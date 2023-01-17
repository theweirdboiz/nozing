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
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <button></button>
        </div>
      </div>
    </aside>
  );
};

Queue.propTypes = {};

export default Queue;
