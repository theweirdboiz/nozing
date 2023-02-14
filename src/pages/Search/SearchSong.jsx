import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { searchDataSelector } from "@redux/selectors";

import MediaItem from "@components/MediaItem";

const SearchSong = (props) => {
  const searchData = useSelector(searchDataSelector);

  return (
    <div className="pb-10">
      <h3 className="font-bold text-[2.4rem]">Bài hát</h3>
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
