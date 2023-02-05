import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import songsSlice from "@redux/songsSlice";
const SongItem = ({
  songId,
  title,
  thumbnail,
  artists,
  order,
  percent,
  releaseDate,
  bgColor,
  isSmall,
}) => {
  const dispatch = useDispatch();
  // handle events
  const handleClick = (id) => {
    dispatch(songsSlice.actions.setCurrentSongId(id));
    dispatch(songsSlice.actions.isPlaying(true));
  };
  const formatReleaseDate = (time) => {
    const milis = Math.floor(Date.now() / 1000 - time);
    const hour = Math.floor(milis / 3600);
    const result = Math.floor(hour / 24);
    if (result < 1) {
      return "Hôm nay";
    }
    return `${result} ngày trước`;
  };

  return (
    <div
      onClick={() => handleClick(songId)}
      style={{ backgroundColor: `${bgColor || ""}` }}
      className={`relative group/item rounded-lg overflow-hidden`}
    >
      <div
        className={`absolute inset-0 ${
          bgColor
            ? "group-hover/item:bg-hover-song"
            : "group-hover/item:bg-alpha-bg"
        }`}
      ></div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-5 p-[1rem]">
          {order && (
            <span
              className={`text-[3.2rem] px-2 text-alpha-bg opacity-100 font-bold text-stroke-${order}`}
            >
              {order}
            </span>
          )}
          <figure
            className={`flex-shrink-0 rounded-lg overflow-hidden ${
              (isSmall && "w-[4rem] h-[4rem]") || "w-[6rem] h-[6rem]"
            } relative cursor-pointer`}
          >
            <img src={thumbnail} alt="" />
            <div className="group-hover/item:flex hidden items-center justify-center absolute inset-0 w-full h-full z-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
            </div>
            <div className="group-hover/item:block hidden absolute inset-0 w-full h-full bg-layout-bg opacity-40"></div>
          </figure>
          <div className="text-[1.2rem] font-medium text-secondary">
            <h3 className="text-[1.4rem] text-white line-clamp-1">{title}</h3>
            {artists?.map((artist) => {
              return (
                <Link
                  className="hover:text-link-text-hover hover:underline"
                  key={artist?.id}
                >
                  {artist?.name}{" "}
                </Link>
              );
            })}
            <h4>{releaseDate && formatReleaseDate(releaseDate)}</h4>
          </div>
        </div>
        {percent ? (
          <span className="mr-6 font-bold ">{percent}%</span>
        ) : (
          <div className="relative z-10 group-hover/item:block hidden">
            <button className="circle hover:bg-hover-circle mr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

SongItem.propTypes = {};
SongItem.defaultProps = {};

export default memo(SongItem);
