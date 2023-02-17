import React from "react";
import PropTypes from "prop-types";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonCustom = ({ className = "" }) => {
  return <div className={`skeleton ${className}`}></div>;
};

Skeleton.propTypes = {};

export default SkeletonCustom;
