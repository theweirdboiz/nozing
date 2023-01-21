import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed min-w-[66rem] top-0 left-[24rem] px-[6rem]">
      <div className="">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </button>
        <form action="">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát ..."
          />
        </form>
      </div>
      <div className="">
        <Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
            />
          </svg>
        </Link>
        <span>Tải bản Windows</span>
        <button>
          <svg width="20" height="20" viewBox="0 0 20 20">
            <defs>
              <linearGradient
                id="j32lhg93hd"
                x1="62.206%"
                x2="18.689%"
                y1="70.45%"
                y2="39.245%"
              >
                <stop offset="0%" stop-color="#F81212"></stop>
                <stop offset="100%" stop-color="red"></stop>
              </linearGradient>
              <linearGradient
                id="hjoavsus6g"
                x1="50%"
                x2="11.419%"
                y1="23.598%"
                y2="71.417%"
              >
                <stop offset="0%" stop-color="#00F"></stop>
                <stop offset="100%" stop-color="#0031FF"></stop>
              </linearGradient>
              <linearGradient
                id="la1y5u3dvi"
                x1="65.655%"
                x2="25.873%"
                y1="18.825%"
                y2="56.944%"
              >
                <stop offset="0%" stop-color="#FFA600"></stop>
                <stop offset="100%" stop-color="orange"></stop>
              </linearGradient>
              <linearGradient
                id="2dsmrlvdik"
                x1="24.964%"
                x2="63.407%"
                y1="8.849%"
                y2="55.625%"
              >
                <stop offset="0%" stop-color="#13EFEC"></stop>
                <stop offset="100%" stop-color="#00E8DF"></stop>
              </linearGradient>
              <filter
                id="4a7imk8mze"
                width="230%"
                height="230%"
                x="-65%"
                y="-65%"
                filterUnits="objectBoundingBox"
              >
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="3.9"
                ></feGaussianBlur>
              </filter>
              <filter
                id="301mo6jeah"
                width="312.7%"
                height="312.7%"
                x="-106.4%"
                y="-106.4%"
                filterUnits="objectBoundingBox"
              >
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="3.9"
                ></feGaussianBlur>
              </filter>
              <filter
                id="b2zvzgq7fj"
                width="295%"
                height="295%"
                x="-97.5%"
                y="-97.5%"
                filterUnits="objectBoundingBox"
              >
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="3.9"
                ></feGaussianBlur>
              </filter>
              <filter
                id="a1wq161tvl"
                width="256%"
                height="256%"
                x="-78%"
                y="-78%"
                filterUnits="objectBoundingBox"
              >
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="3.9"
                ></feGaussianBlur>
              </filter>
              <path
                id="qtpqrj1oda"
                d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"
              ></path>
              <path id="jggzvnjgfc" d="M0 0H20V20H0z"></path>
              <path
                id="2eiwxjmc7m"
                d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"
              ></path>
            </defs>
            <g fill="none" fill-rule="evenodd" transform="translate(2 3)">
              <mask id="tinejqaasb" fill="#fff">
                <use xlink:href="#qtpqrj1oda"></use>
              </mask>
              <use fill="#FFF" fill-opacity="0" xlink:href="#qtpqrj1oda"></use>
              <g mask="url(#tinejqaasb)">
                <g transform="translate(-2 -3)">
                  <mask id="uf3ckvfvpf" fill="#fff">
                    <use xlink:href="#jggzvnjgfc"></use>
                  </mask>
                  <use fill="#D8D8D8" xlink:href="#jggzvnjgfc"></use>
                  <circle
                    cx="8.9"
                    cy="6.8"
                    r="9"
                    fill="url(#j32lhg93hd)"
                    filter="url(#4a7imk8mze)"
                    mask="url(#uf3ckvfvpf)"
                  ></circle>
                  <circle
                    cx="9.3"
                    cy="13.7"
                    r="5.5"
                    fill="url(#hjoavsus6g)"
                    filter="url(#301mo6jeah)"
                    mask="url(#uf3ckvfvpf)"
                  ></circle>
                  <circle
                    cx="15.9"
                    cy="6.9"
                    r="6"
                    fill="url(#la1y5u3dvi)"
                    filter="url(#b2zvzgq7fj)"
                    mask="url(#uf3ckvfvpf)"
                  ></circle>
                  <circle
                    cx="16.4"
                    cy="17.7"
                    r="7.5"
                    fill="url(#2dsmrlvdik)"
                    filter="url(#a1wq161tvl)"
                    mask="url(#uf3ckvfvpf)"
                  ></circle>
                </g>
              </g>
              <use
                fill="#FFF"
                fill-opacity="0.05"
                xlink:href="#2eiwxjmc7m"
              ></use>
            </g>
          </svg>
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
