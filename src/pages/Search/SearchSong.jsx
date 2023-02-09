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

  const searchSongsData = useSelector(searchSongsDataSelector);

  useEffect(() => {
    dispatch(fetchSearchArtistSongs(searchData?.top?.id));
  }, []);

  return (
    <div>
      <h3>Bài hát</h3>
      <div className="">
        {searchSongsData?.items.map((item, index) => {
          return (
            <MediaItem
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
