import React from "react";
import PropTypes from "prop-types";

import Personal from "@pages/Personal";
import Explore from "@pages/Explore";
import ZingChart from "@pages/ZingChart";
import Radio from "@pages/Radio";
import Follow from "@pages/Follow";

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
    component: Radio,
  },
  {
    follow: "/the-loai-nghe-si/Viet-Nam",
    component: Follow,
  },
];

Config.propTypes = {};

export default routes;
