import React from "react";
import PropTypes from "prop-types";

import Personal from "@pages/Personal";

const routes = [
  {
    path: "/ca-nhan",
    component: Personal,
  },
  {
    explore: "/",
    component: Explore,
  },
  {
    "zing-chart": "/zing-chart",
    component: ZingChart,
  },
  {
    radio: "/radio",
  },
  {
    follow: "/the-loai-nghe-si/Viet-Nam",
  },
];

Config.propTypes = {};

export default routes;
