import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { Navbar } from "./components";

const Search = (props) => {
  return (
    <div className="px-[6rem] mt-[7rem] pt-[2rem]">
      <Navbar />
      <Outlet />
    </div>
  );
};

Search.propTypes = {};

export default Search;
