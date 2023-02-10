import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { searchDataSelector } from "@redux/selectors";
import MvCard from "@components/mvCard/MvCard";
const SearchMv = (props) => {
  const searchData = useSelector(searchDataSelector);
  return (
    <div className="grid grid-cols-3 gap-12 pb-10">
      {searchData?.videos?.map((item) => {
        return (
          <MvCard
            key={item?.encodeId}
            encodeId={item?.encodeId}
            title={item?.title}
            thumbnailM={item?.thumbnailM}
            artists={item?.artists}
            duration={item?.duration}
            link={item?.link}
            artistImg={item?.artist?.thumbnail}
          ></MvCard>
        );
      })}
    </div>
  );
};

SearchMv.propTypes = {};

export default SearchMv;
