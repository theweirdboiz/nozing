import React, { memo, useCallback } from "react";
import PropTypes from "prop-types";

const MediaItem = ({ song, onClick, index }) => {
  // define
  const prefixTime = (time) => {
    return time > 9 ? time : `0${time}`;
  };
  const formatDuration = (t) => {
    const time = Number.parseInt(t);
    const hour = Math.floor(time / 3600);
    const minute = Math.floor((time - hour * 3600) / 60);
    const second = time - (hour * 3600 + minute * 60);
    const hourPrefix = prefixTime(hour);
    const minutePrefix = prefixTime(minute);
    const secondPrefix = prefixTime(second);
    if (hour > 0) {
      return `${hourPrefix}:${minutePrefix}:${secondPrefix}`;
    }
    return `${minutePrefix}:${secondPrefix}`;
  };
  // handle events
  const handleClickItem = (songId, index) => {
    onClick(songId, index);
  };
  return (
    <div className="relative group/item">
      <div className="flex items-center justify-between p-[1rem] text-[1.2rem] text-secondary border-b border-border-primary rounded-lg hover:bg-hover-circle">
        <div className="flex items-center w-[50%] gap-x-3">
          <div className="relative">
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
                d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
              />
            </svg>
            <input
              type="checkbox"
              name=""
              id=""
              className="absolute inset-0 cursor-pointer hidden group-hover/item:block"
            />
          </div>
          <div className="flex items-center gap-x-4">
            <div
              className="cursor-pointer relative"
              onClick={() => handleClickItem(song?.encodeId, index)}
            >
              <figure className="w-[4rem] h-[4rem] rounded overflow-hidden flex-shrink-0">
                <img src={song?.thumbnail} alt="" />
              </figure>
              <div className="absolute inset-0 w-full h-full bg-layout-bg opacity-0 group-hover/item:opacity-60"></div>
              <div className="absolute inset-0 w-full h-full hidden items-center justify-center group-hover/item:flex">
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
              </div>
            </div>
            <div className="">
              <h5 className="text-[1.4rem] text-white font-semibold">
                {song?.title?.slice(0, 35)}
              </h5>
              <span className="font-medium hover:underline hover:text-link-text-hover cursor-pointer">
                {song?.artistsNames}
              </span>
            </div>
          </div>
        </div>
        <span className="w-[40%] font-medium cursor-pointer hover:underline hover:text-link-text-hover">
          {song?.album?.title}
        </span>
        <div className="flex-1 text-right mr-3 relative">
          <div className="absolute right-0 top-[50%] -translate-y-[50%] hidden text-white group-hover/item:flex">
            <button className="circle__large">
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
                  d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                />
              </svg>
            </button>
            <button className="circle__large">
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
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
            <button className="circle__large">
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
          <span className="group-hover/item:hidden">
            {formatDuration(song?.duration)}
          </span>
        </div>
      </div>
    </div>
  );
};

MediaItem.propTypes = {};

export default memo(MediaItem);
