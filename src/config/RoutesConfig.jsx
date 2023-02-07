import React from "react";
import PropTypes from "prop-types";

import Personal from "@pages/Personal";
import Explore from "@pages/Explore";
import ZingChart from "@pages/ZingChart";
import Radio from "@pages/Radio";
import Follow from "@pages/Follow";
import Playlist from "@pages/Playlist";
import {
  SearchAll,
  SearchSong,
  SearchPlaylist,
  SearchArtist,
  SearchMv,
} from "@pages/Search";

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
    path: "/tim-kiem/tat-ca",
    component: SearchAll,
  },
  {
    id: "search-song",
    path: "/tim-kiem/bai-hat",
    component: SearchSong,
  },
  {
    id: "search-playlist",
    path: "/tim-kiem/playlist",
    component: SearchPlaylist,
  },
  {
    id: "search-artist",
    path: "/tim-kiem/artist",
    component: SearchArtist,
  },
  {
    id: "search-mv",
    path: "/tim-kiem/video",
    component: SearchMv,
  },
];

export default routes;
