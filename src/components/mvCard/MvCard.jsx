import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const MvCard = ({
  encodeId,
  title,
  thumbnailM,
  artists,
  duration,
  link,
  artistImg,
}) => {
  const prefixTime = (time) => {
    return time > 9 ? time : `0${time}`;
  };
  const navigator = useNavigate();
  const formatDuration = (t) => {
    const time = Number.parseInt(t);
    const hour = Math.floor(time / 3600);
    const minute = Math.floor((time - hour * 3600) / 60);
    const second = time - (hour * 3600 + minute * 60);
    const hourPrefix = prefixTime(hour);
    const minutePrefix = prefixTime(minute);
    const secondPrefix = prefixTime(second);
    if (hour > 0) {
      return `${hourPrefix}:${minutePrefix}:${secondPrefix}`;
    }
    return `${minutePrefix}:${secondPrefix}`;
  };
  const trimLink = (link) => {
    return link.slice(0, link.indexOf("."));
  };
  const handlePlayChanel = (e, link) => {
    e.stopPropagation();
    e.preventDefault();
    navigator(trimLink(link), { state: { isPlay: true } });
  };
  return (
    <div className="" key={encodeId}>
      <Link to={trimLink(link)} className="relative cursor-pointer group/item">
        <figure className="rounded-xl overflow-hidden">
          <img
            className="relative w-full group-hover/item:scale-110 duration-500 ease-out"
            src={thumbnailM}
            alt=""
          />
          <span className="absolute py-[1px] px-2  rounded-lg  right-2 bottom-2 bg-layout-bg flex items-center justify-center text-[1.3rem] font-medium z-10">
            {formatDuration(duration)}
          </span>
        </figure>
        <div className="absolute inset-0 bg-layout-bg opacity-40 hidden group-hover/item:block"></div>
        <div className="absolute inset-0 w-full h-full rounded-2xl hidden duration-300 group-hover/item:flex items-center justify-evenly">
          {/* play */}
          <div
            onClick={(e) => handlePlayChanel(e, link)}
            className="border rounded-full  flex items-center justify-center p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[3.5rem] h-[3.5rem] translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
              />
            </svg>
          </div>
        </div>
      </Link>
      <div className="mt-[1.2rem] flex items-center gap-x-5">
        <figure className="w-[4rem] h-[4rem] rounded-full overflow-hidden">
          <img src={artistImg} alt="" />
        </figure>

        <div className="text-[1.4rem]">
          <h3 className="font-semibold hover:text-link-text-hover cursor-pointer line-clamp-1">
            {title}
          </h3>
          <p className=" text-secondary text-[1.2rem] font-medium line-clamp-1">
            <>
              {artists?.map((artist) => {
                return (
                  <Link
                    key={artist?.id}
                    className="hover:underline hover:text-link-text-hover"
                    to={artist?.link}
                  >
                    {artist.name}{" "}
                  </Link>
                );
              })}
            </>
          </p>
        </div>
      </div>
    </div>
  );
};

MvCard.propTypes = {};

export default MvCard;
