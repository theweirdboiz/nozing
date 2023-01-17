import React from "react";
import PropTypes from "prop-types";
import CardSong from "@components/CardSong";
import { Link } from "react-router-dom";

const Queue = () => {
  return (
    <aside className="fixed right-0 top-0 w-[33rem] bottom-[9rem] bg-queue-player-bg shadow-box-shadow-queue flex flex-col">
      <div className="py-[1.4rem]">
        <div className="flex gap-x-2 justify-between  px-2">
          <div className="inline-flex items-center text-[1.2rem] font-medium p-1 bg-alpha-bg rounded-[99px] flex-1">
            <div className="bg-tab-active-bg py-[5px] rounded-[99px] flex-grow flex items-center justify-center cursor-pointer">
              <span>Danh sách phát</span>
            </div>
            <div className="flex-grow flex items-center justify-center  cursor-pointer">
              <span>Nghe gần đây</span>
            </div>
          </div>
          <button className="inline-block bg-alpha-bg circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <button className="inline-block bg-alpha-bg circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex-1">
        <div className="relative w-full h-full overflow-hidden">
          <div className="absolute inset-0 scrollbar-thin px-3">
            <CardSong />
            <div className="mt-5 text-[1.4rem]">
              <h3 className="font-bold">Tiếp theo</h3>
              <p className="text-secondary">
                Từ play list <Link>Xuân lắng động</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

Queue.propTypes = {};

export default Queue;
