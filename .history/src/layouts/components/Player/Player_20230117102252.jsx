import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Player = () => {
  return (
    <section className="fixed bottom-0 left-0 right-0 px-[2rem] border border-border-primary flex items-center">
      <div className="flex h-[9rem] py-5">
        <div className="flex justify-start items-center gap-x-5">
          <Link>
            <figure className="w-[6.4rem] h-[6.4rem] rounded-md overflow-hidden">
              <img
                src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/7/4/2/a/742adf703cc6b4acf4ec6f4ac6e2bb76.jpg"
                alt=""
              />
            </figure>
          </Link>
          <div className="">
            <Link>
              <h3 className="text-[1.4rem] font-semibold">Tết này con sẽ về</h3>
            </Link>
            <Link className="">
              <span className="text-[1.2rem] text-secondary hover:text-link-text-hover hover:underline">
                Bùi Công Nam
              </span>
            </Link>
          </div>
          <div className="ml-6 flex gap-x-4">
            <button className="circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
            <button className="inline-flex items-center justify-center p-1 rounded-[99px] w-[3.2rem] h-[3.2rem] hover:bg-hover-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
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
      </div>
      {/* Player control */}
      <div className="flex flex-col">
        <div className="flex">
          <button className="circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className=""></div>
    </section>
  );
};

Player.propTypes = {};

export default Player;
