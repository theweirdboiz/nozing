import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const Album = ({ data }) => {
  const navigator = useNavigate();

  const trimLink = (link) => {
    return link.slice(0, link.indexOf("."));
  };
  const handlePlayChanel = (e, link) => {
    e.stopPropagation();
    e.preventDefault();
    navigator(trimLink(link), { state: { isPlay: true } });
  };

  return (
    <div className="" key={data?.encodeId}>
      <Link
        to={trimLink(data?.link)}
        className="relative cursor-pointer group/item"
      >
        <figure className="rounded-xl overflow-hidden">
          <img
            className="w-full group-hover/item:scale-110 duration-500 ease-out"
            src={data?.thumbnail}
            alt=""
          />
        </figure>
        <div className="absolute inset-0 bg-layout-bg opacity-40 hidden group-hover/item:block"></div>
        <div className="absolute inset-0 w-full h-full rounded-2xl hidden duration-300 group-hover/item:flex items-center justify-evenly">
          {/* heart */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          {/* play */}
          <div
            onClick={(e) => handlePlayChanel(e, data?.link)}
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
      </Link>
      <div className="mt-[1.2rem]">
        <h3 className="font-semibold hover:text-link-text-hover cursor-pointer line-clamp-1">
          {data?.title}
        </h3>
        <p className=" text-secondary text-[1.4rem] font-medium line-clamp-1">
          {data?.sectionId === "h100" ? (
            <>
              {item?.artists?.map((artist) => {
                return (
                  <Link
                    key={artist?.id}
                    className="hover:underline hover:text-link-text-hover"
                    to={artist?.link}
                  >
                    {artist.name}
                    {", "}
                  </Link>
                );
              })}
            </>
          ) : (
            data?.sortDescription
          )}
        </p>
      </div>
    </div>
  );
};

Album.propTypes = {};

export default Album;
