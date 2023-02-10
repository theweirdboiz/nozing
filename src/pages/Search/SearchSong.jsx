import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { searchDataSelector, searchSongsDataSelector } from "@redux/selectors";
import { fetchSearchArtistSongs } from "@redux/songsSlice";

import MediaItem from "@components/MediaItem";

const SearchSong = (props) => {
  const dispatch = useDispatch();

  const searchData = useSelector(searchDataSelector);

  return (
    <div className="pb-10">
      <h3>Bài hát</h3>
      <div className="">
        {searchData?.songs?.map((item, index) => {
          return (
            <MediaItem
              key={item?.encodeId}
              songId={item.encodeId}
              thumbnail={item.thumbnail}
              artists={item.artists}
              title={item.title}
              albumTitle={item.albumTitle}
              duration={item.duration}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

SearchSong.propTypes = {};

export default SearchSong;
