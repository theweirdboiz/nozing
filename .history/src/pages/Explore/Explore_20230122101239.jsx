import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Gallary from "../../components/Gallary";

import Chanel from "./components/chanel/Chanel";

import { useDispatch } from "react-redux";
import { fetchHomeData } from "./exploreSlice";

const Explore = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeData());
  }, []);
  return (
    <div className="w-full h-full">
      <Gallary></Gallary>
      <Chanel></Chanel>
    </div>
  );
};

Explore.propTypes = {};

export default Explore;