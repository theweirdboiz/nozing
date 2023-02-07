import React, { memo } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
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

  return (
    <>
      <ul>
        {detailPlaylist?.song?.items?.map((song, index) => {
          return (
            <MediaItem
              key={song?.encodeId}
              songId={song?.encodeId}
              thumbnail={song?.thumbnail}
              artists={song?.artists}
              title={song?.title}
              albumTitle={song?.album?.title}
              duration={song?.duration}
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
