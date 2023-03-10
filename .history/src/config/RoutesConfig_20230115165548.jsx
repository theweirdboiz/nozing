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
    path: "/",
    component: Explore,
  },
  {
    path: "/zing-chart",
    component: ZingChart,
  },
  {
    path: "/radio",
    component: Radio,
  },
  {
    path: "/the-loai-nghe-si/Viet-Nam",
    component: Follow,
  },
];

export default routes;
