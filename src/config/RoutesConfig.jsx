import React from "react";
import PropTypes from "prop-types";

import Personal from "@pages/Personal";
import Explore from "@pages/Explore";
import Radio from "@pages/Radio";
import ZingChart from "@pages/ZingChart";
import Follow from "@pages/Follow";
import Playlist from "@pages/Playlist";
import Artist from "@pages/Artist";
import { Search } from "@pages/Search";
import Error from "@pages/error";

const routes = [
  { id: "personal", path: "/ca-nhan", component: Personal },
  {
    path: "/",
    id: "explore",
    component: Explore,
  },
  { id: "zing-chart", path: "/zing-chart", component: ZingChart },
  {
    id: "radio",
    path: "/radio",
    component: Radio,
  },
  { id: "follow", path: "/the-loai-nghe-si/Viet-Nam", component: Error },
  { id: "new-release", path: "/moi-phat-hanh", component: Error },
  { id: "hub", path: "/hub", component: Error },
  { id: "top100", path: "/top100", component: Error },
  { id: "mv", path: "/the-loai-video/Viet-Nam/:mvId", component: Error },

  {
    id: "album",
    path: "/album/:title/:playlistId",
    component: Playlist,
  },
  { id: "playlist", path: "/playlist/:title/:playlistId", component: Playlist },
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
  {
    id: "zing-chart-week",
    path: "/zing-chart-tuan/:title/:chartId",
    component: ZingChart,
  },
  {
    id: "err",
    path: "*",
    component: Error,
  },
];

export default routes;
