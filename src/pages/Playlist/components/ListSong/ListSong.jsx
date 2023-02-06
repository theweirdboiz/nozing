import React, { memo } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import songsSlice from "@redux/songsSlice";
import {
  detailPlaylistSelector,
  currentSongInforSelector,
} from "@redux/selectors";

import MediaItem from "@components/MediaItem";

const ListSong = () => {
  const dispatch = useDispatch();

  const detailPlaylist = useSelector(detailPlaylistSelector);

  const currentSongInfor = useSelector(currentSongInforSelector);

  const formatTime = (totalDuration) => {
    const hour = Math.floor(totalDuration / 3600);
    const minute = Math.floor((totalDuration - hour * 3600) / 60);
    return `${hour} giờ ${minute} phút`;
  };
  // handle events
  const handleClickItem = (songId, index) => {
    dispatch(songsSlice.actions.setCurrentSongId(songId));
    dispatch(songsSlice.actions.isPlaying(true));
    dispatch(songsSlice.actions.setIndex(index));
    dispatch(
      songsSlice.actions.setRecentSongs({
        songId: currentSongInfor?.encodeId,
        title: currentSongInfor?.title,
        thumbnail: currentSongInfor?.thumbnail,
        artists: currentSongInfor?.artists,
      })
    );
  };

  return (
    <>
      <ul>
        {detailPlaylist?.song?.items?.map((song, index) => {
          return (
            <MediaItem
              key={index}
              song={song}
              onClick={handleClickItem}
              index={index}
            />
          );
        })}
      </ul>
      <h6 className="text-[1.2rem] font-medium text-secondary flex items-center mt-4">
        {detailPlaylist?.song?.items?.length} bài hát
        <span className="font-bold mx-4 text-[1.6rem]">•</span>
        {formatTime(detailPlaylist?.song?.totalDuration)}
      </h6>
    </>
  );
};
ListSong.propTypes = {};

export default memo(ListSong);
