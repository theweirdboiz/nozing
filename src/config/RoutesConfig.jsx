import React from "react";
import PropTypes from "prop-types";

import Personal from "@pages/Personal";
import Explore from "@pages/Explore";
import ZingChart from "@pages/ZingChart";
import Radio from "@pages/Radio";
import Follow from "@pages/Follow";
import Playlist from "@pages/Playlist";

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
    path: "/zing-chart/:title/:chartId",
    component: ZingChart,
  },
  {
    path: "/zing-chart-tuan/:title/:chartId",
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
  {
    path: "/playlist/:title/:playlistId",
    component: Playlist,
  },
  {
    path: "/album/:title/:playlistId",
    component: Playlist,
  },
];

export default routes;
