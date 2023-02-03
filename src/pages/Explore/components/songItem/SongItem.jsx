import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SongItem = ({ item }) => {
  return (
    <div className="flex items-center gap-x-5 p-[1rem]">
      <figure className="flex-shrink-0 rounded-lg overflow-hidden w-[6rem] h-[6rem]">
        <img src={item?.thumbnail} alt="" />
      </figure>
      <div className="text-[1.2rem] font-medium text-secondary">
        <h3 className="text-[1.4rem] text-white">{item?.title}</h3>
        {item?.artists?.map((artist) => {
          return <Link key={artist?.id}>{artist?.name} </Link>;
        })}
        <h4>{item?.releaseDate}</h4>
      </div>
    </div>
  );
};

SongItem.propTypes = {};

export default memo(SongItem);
