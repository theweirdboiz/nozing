import React from "react";
import PropTypes from "prop-types";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import songsSlice, { fetchSearchData } from "@redux/songsSlice";
import { searchKeywordSelector } from "@redux/selectors";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
const Search = (props) => {
  const inputRef = useRef();
  const navigator = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("keyup", handleSubmit);
    return () => window.removeEventListener("keyup", handleSubmit);
  }, []);

  // show close btn
  const [isShow, setIsShow] = useState(0);

  const handleKeywordChange = () => {
    setIsShow(1);
  };
  // handle events
  const handleSubmit = (e) => {
    if (e.keyCode === 13) {
      dispatch(fetchSearchData(inputRef.current.value));
      dispatch(songsSlice.actions.setSearchKeyword(inputRef.current.value));
      navigator({
        pathname: "tim-kiem/tat-ca",
        search: createSearchParams({
          p: inputRef.current.value,
        }).toString(),
      });
    }
  };
  const handleClearSearchKeyword = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
    setIsShow(0);
  };
  return (
    <div className="w-[40rem] relative">
      <div className="flex items-center gap-x-2 bg-alpha-bg h-[4rem] rounded-[9.9rem] relative">
        <button
          onClick={() => {
            navigator({
              pathname: "tat-ca",
              search: createSearchParams({
                p: inputRef.current.value,
              }).toString(),
            });
          }}
          className="absolute left-3"
        >
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        <input
          ref={inputRef}
          onChange={handleKeywordChange}
          type="text"
          placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát ..."
          className="absolute left-16 bg-transparent w-full"
        />
        <button
          onClick={handleClearSearchKeyword}
          className={`absolute right-4 ${isShow ? "block" : "hidden"}`}
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

Search.propTypes = {};

export default Search;
