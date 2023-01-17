import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardSong = (props) => {
  return (
    <div className="flex rounded-xl items-center p-3 gap-x-3 relative group/item hover:bg-alpha-bg">
      <div className="">
        <figure className="w-[4rem] h-[4rem] rounded-lg overflow-hidden relative">
          <img
            src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/avatars/7/4/2/a/742adf703cc6b4acf4ec6f4ac6e2bb76.jpg"
            alt=""
          />
          <div className="absolute inset-0 group-hover/item:bg-opacity flex items-center justify-center">
            <button className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
            </button>
          </div>
        </figure>
      </div>
      <div className="">
        <h3 className="text-[1.4rem] font-semibold">Tết này con sẽ về</h3>
        <Link>
          <span className="text-[1.2rem] text-secondary hover:underline hover:text-link-text-hover">
            Bùi Công Nam
          </span>
        </Link>
      </div>
      <div className="absolute right-1  invisible group-hover/item:visible rounded-xl flex justify-between items-center p-8">
        <div className="flex gap-x-5">
          <button className="circle">
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
          <button className="circle">
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
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

CardSong.propTypes = {};

export default CardSong;
