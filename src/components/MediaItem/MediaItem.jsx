import React, { memo } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import songsSlice from "@redux/songsSlice";

const MediaItem = ({ song }) => {
  // define
  const dispatch = useDispatch();

  const prefixTime = (time) => {
    return time > 9 ? time : `0${time}`;
  };
  const formatDuration = (t) => {
    // 1p = 60
    // ? = 230
    const time = Number.parseInt(t);
    const hour = Math.floor(time / 3600);
    const minute = Math.floor((time - hour * 3600) / 60);
    const second = time - (hour * 3600 + minute * 60);
    // return
    const hourPrefix = prefixTime(hour);
    const minutePrefix = prefixTime(minute);
    const secondPrefix = prefixTime(second);
    if (hour > 0) {
      return `${hourPrefix}:${minutePrefix}:${secondPrefix}`;
    }
    return `${minutePrefix}:${secondPrefix}`;
  };
  // handle events
  const handleClickItem = (songId) => {
    dispatch(songsSlice.actions.setCurrentSongId(songId));
    dispatch(songsSlice.actions.isPlaying(true));
  };
  return (
    <div className="flex items-center justify-between p-[1rem] text-[1.2rem] text-secondary border-b border-border-primary rounded-lg hover:bg-alpha-bg">
      <div className="flex items-center w-[50%] gap-x-3">
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
        <div className="flex items-center gap-x-4">
          <div onClick={() => handleClickItem(song?.encodeId)}>
            <figure className="w-[4rem] h-[4rem] rounded overflow-hidden flex-shrink-0">
              <img src={song?.thumbnail} alt="" />
            </figure>
          </div>
          <div className="">
            <h5 className="text-[1.4rem] text-white font-semibold">
              {song?.title?.slice(0, 35)}
            </h5>
            <span className="font-medium">{song?.artistsNames}</span>
          </div>
        </div>
      </div>
      <span className="w-[40%] font-medium">{song?.album?.title}</span>
      <span className="flex-1 text-right mr-3">
        {formatDuration(song?.duration)}
      </span>
    </div>
  );
};

MediaItem.propTypes = {};

export default memo(MediaItem);
