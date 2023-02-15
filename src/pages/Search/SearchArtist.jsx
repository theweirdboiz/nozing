import React from "react";
import PropTypes from "prop-types";
import ArtistCard from "@components/artistCard";
import { useSelector } from "react-redux";
import songsSlice from "@redux/songsSlice";

const SearchArtist = (props) => {
  const { searchData } = useSelector(songsSlice);

  return (
    <div className="grid grid-cols-5 gap-12 pb-[10]">
      {searchData?.artists?.map((item) => {
        return (
          <ArtistCard
            key={item?.id}
            id={item?.id}
            link={item?.link}
            name={item?.name}
            thumbnail={item?.thumbnail}
            follow={item?.follow}
          />
        );
      })}
    </div>
  );
};

SearchArtist.propTypes = {};

export default SearchArtist;
