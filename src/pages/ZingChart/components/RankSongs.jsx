import React from "react";
import { Link } from "react-router-dom";

import MediaItem from "@components/MediaItem";
const RankSongs = ({ listSong, isRank, inPlaylist }) => {
  return (
    <div className="mt-6">
      {listSong?.map((item, index) => {
        return (
          <MediaItem
            key={item?.encodeId}
            songId={item?.encodeId}
            thumbnail={item?.thumbnail}
            artists={item?.artists}
            title={item?.title}
            albumTitle={item?.album?.title}
            duration={item?.duration}
            index={index}
            isRank={isRank}
            inPlaylist={inPlaylist}
          />
        );
      })}
    </div>
  );
};

RankSongs.propTypes = {};

export default RankSongs;
