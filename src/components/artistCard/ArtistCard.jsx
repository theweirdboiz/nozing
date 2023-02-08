import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ArtistCard = ({ id, link, name, thumbnail, follow }) => {
  const prefixFollow = (follow) => {
    if (follow < 1000) {
      return follow;
    }
    if (follow < 1000000) {
      return Math.floor(follow / 1000).toFixed(0) + "K";
    }
    return (follow / 1000000).toFixed(1) + "M";
  };

  return (
    <div className="text-center">
      <Link to={link} className="group/img block cursor-pointer relative">
        <figure className="rounded-full overflow-hidden">
          <img
            src={thumbnail}
            alt=""
            className="group-hover/img:scale-105 transition-all duration-700 ease-out"
          />
        </figure>
        <div className="hidden absolute inset-0 group-hover/img:flex items-center justify-center  bg-bg-song backdrop-brightness-75 rounded-full">
          <div className="flex items-center justify-center p-2 rounded-full border">
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
              />
            </svg>
          </div>
        </div>
      </Link>
      <Link
        to={link}
        className="font-semibold mt-5 text-[1.4rem] hover:underline hover:text-link-text-hover"
      >
        {name}
      </Link>
      <h5 className="text-[1.2rem] font-semibold text-secondary">
        <strong>{prefixFollow(follow)}</strong> quan tâm
      </h5>
      <div className="inline-flex gap-x-2 items-center rounded-full border border-border-primary mt-5 py-2 px-8 mb-5 text-[1.2rem] font-semibold bg-alpha-bg hover:brightness-90 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
          />
        </svg>
        <button className="uppercase">Quan tâm</button>
      </div>
    </div>
  );
};

ArtistCard.propTypes = {};

export default ArtistCard;
