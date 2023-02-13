import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import songsSlice from "@redux/songsSlice";

import { homeDataSelector } from "@redux/selectors";

const BtnPlayNewRelease = (props) => {
  const dispatch = useDispatch();

  const { newRelease } = useSelector(homeDataSelector);

  const handleClick = () => {
    dispatch(songsSlice.actions.setDetailPlaylist(newRelease?.items?.vPop));

    dispatch(songsSlice.actions.isPlaying(true));
    dispatch(
      songsSlice.actions.setCurrentSongId(newRelease?.items?.vPop[0]?.encodeId)
    );
    dispatch(songsSlice.actions.setIndex(0));
  };
  return (
    <div
      onClick={handleClick}
      className="rounded-full mx-auto mt-5 py-[6px] px-3 bg-purple-primary flex items-center justify-center gap-x-4 max-w-[28rem] cursor-pointer"
    >
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
      <span>Phát nhạc mới phát hành</span>
    </div>
  );
};

BtnPlayNewRelease.propTypes = {};

export default BtnPlayNewRelease;
