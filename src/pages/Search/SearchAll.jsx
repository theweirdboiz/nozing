import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import { searchDataSelector } from "@redux/selectors";

import { Navbar } from "./components";
import { Link } from "react-router-dom";

const SearchAll = (props) => {
  const searchData = useSelector(searchDataSelector);

  console.log(searchData);
  const isArtist = searchData?.top?.objectType === "artist";
  return (
    <div>
      <Navbar />
      <section className="">
        <h3 className="mb-[2rem] font-bold capitalize text-[2rem]">Nổi bật</h3>
        <div className="grid grid-cols-3 gap-x-[2.8rem]">
          <Link className="relative p-4 flex items-center gap-x-4 bg-alpha-bg rounded-lg group/item">
            <figure className="relative z-10 rounded-full w-[8.4rem] h-[8.4rem] overflow-hidden group/img">
              <img
                className="group-hover/img:scale-105 transition-all duration-700 ease-out"
                src={searchData?.top?.thumbnail}
                alt=""
              />
              <div className="group-hover/item:block  hidden absolute inset-0 bg-layout-bg opacity-40 "></div>
              <div className="group-hover/item:flex absolute inset-0 text-white hidden justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.0}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
              </div>
            </figure>
            <div className="relative z-10 text-secondary text-[1.2rem]">
              <h4 className="mb-2">{isArtist && "Nghệ sĩ"}</h4>
              <h3 className="mb-2 font-bold text-white text-[1.4rem] hover:underline hover:text-link-text-hover">
                {isArtist && searchData?.top?.name}
              </h3>
              <span>{isArtist && searchData?.artists[0]?.totalFollow}</span>
            </div>
            <div className="group-hover/item:block hidden absolute inset-0 bg-sidebar-bg"></div>
          </Link>
        </div>
      </section>
    </div>
  );
};

SearchAll.propTypes = {};

export default SearchAll;
