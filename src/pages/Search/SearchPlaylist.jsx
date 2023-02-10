import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { searchDataSelector } from "@redux/selectors";

import Album from "@pages/Explore/components/album";
const SearchPlaylist = (props) => {
  const searchData = useSelector(searchDataSelector);
  return (
    <div className="grid grid-cols-5 gap-12 pb-10">
      {searchData?.playlists?.map((item) => {
        return (
          <Album
            key={item?.encodeId}
            encodeId={item?.encodeId}
            thumbnail={item?.thumbnail}
            title={item?.title}
            artists={item?.artist}
            sortDescription={item?.sortDescription}
            link={item?.link}
          />
        );
      })}
    </div>
  );
};

SearchPlaylist.propTypes = {};

export default SearchPlaylist;
