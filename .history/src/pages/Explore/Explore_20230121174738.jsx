import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Gallary from "../../components/Gallary";

import Chanel from "./components/chanel/Chanel";

import { home } from "@APIs";

const Explore = (props) => {
  useEffect(() => {
    const fetchDataHome = async () => {
      const res = await home.getHome();
      console.log(res);
    };
    fetchDataHome();
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
