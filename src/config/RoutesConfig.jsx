import React from "react";
import PropTypes from "prop-types";

import Personal from "@pages/Personal";
import Explore from "@pages/Explore";
import ZingChart from "@pages/ZingChart";
import Radio from "@pages/Radio";
import Follow from "@pages/Follow";
import Playlist from "@pages/Playlist";
import Artist from "@pages/Artist";
import { Search } from "@pages/Search";

const routes = [
  { id: "personal", path: "/ca-nhan", component: Personal },
  {
    path: "/",
    id: "explore",
    component: Explore,
  },
  { id: "zing-chart", path: "/zing-chart", component: ZingChart },
  {
    id: "zing-chart-week",
    path: "/zing-chart-tuan/:title/:chartId",
    component: ZingChart,
  },
  {
    id: "radio",
    path: "/radio",
    component: Radio,
  },
  { id: "follow", path: "/the-loai-nghe-si/Viet-Nam", component: Follow },
  { id: "playlist", path: "/playlist/:title/:playlistId", component: Playlist },
  {
    id: "album",
    path: "/album/:title/:playlistId",
    component: Playlist,
  },
  {
    id: "search",
    path: "/tim-kiem",
    component: Search,
  },
  {
    id: "artist",
    path: "/:artist",
    component: Artist,
  },
];

export default routes;
