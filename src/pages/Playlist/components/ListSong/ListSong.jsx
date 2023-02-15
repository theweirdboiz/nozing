import React, { memo } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { detailPlaylistSelector } from "@redux/selectors";

import MediaItem from "@components/MediaItem";
import { formatTime } from "@helpers/helpers";

const ListSong = ({ data, status }) => {
  // handle events
  return (
    <>
      <ul>
        {data?.song?.items?.map((song, index) => {
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
              inPlaylist
            />
          );
        })}
      </ul>
      <h6 className="text-[1.2rem] font-medium text-secondary flex items-center mt-4">
        {data?.song?.items?.length} bài hát
        <span className="font-bold mx-4 text-[1.6rem]">•</span>
        {formatTime(data?.song?.totalDuration)}
      </h6>
    </>
  );
};
ListSong.propTypes = {};

export default memo(ListSong);
