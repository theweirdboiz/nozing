import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import songsSlice from "@redux/songsSlice";

import MediaItem from "@components/MediaItem";

const ListSong = ({ listSong, totalDuration }) => {
  const dispatch = useDispatch();
  console.log("rerender list");
  const formatTime = () => {
    const hour = Math.floor(totalDuration / 3600);
    const minute = Math.floor((totalDuration - hour * 3600) / 60);
    return `${hour} giờ ${minute} phút`;
  };
  formatTime();
  // handle events
  const handleClickItem = (songId) => {
    dispatch(songsSlice.actions.setCurrentSongId(songId));
    dispatch(songsSlice.actions.isPlaying(true));
  };
  return (
    <>
      <ul>
        {listSong?.map((song, index) => {
          return (
            <MediaItem key={index} song={song} onClick={handleClickItem} />
          );
        })}
      </ul>
      <h6 className="text-[1.2rem] font-medium text-secondary flex items-center mt-4">
        {listSong?.length} bài hát
        <span className="font-bold mx-4 text-[1.6rem]">•</span>
        {formatTime()}
      </h6>
    </>
  );
};

ListSong.propTypes = {};

export default ListSong;
