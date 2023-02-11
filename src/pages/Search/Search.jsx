import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { Navbar } from "./components";

const Search = (props) => {
  return (
    <div className="px-[6rem]">
      <Navbar />
      <Outlet />
    </div>
  );
};

Search.propTypes = {};

export default Search;
