import React from "react";
import PropTypes from "prop-types";

import MediaItem from "@components/MediaItem";

const ListSong = ({ listSong, totalDuration }) => {
  return (
    <>
      <ul>
        {listSong?.map((song, index) => {
          return <MediaItem key={index} song={song} />;
        })}
      </ul>
      <h6>
        <span>
          {listSong?.length} bài hát • {totalDuration}
        </span>
      </h6>
    </>
  );
};

ListSong.propTypes = {};

export default ListSong;
