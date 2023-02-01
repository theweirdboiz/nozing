import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getDetailPlaylist } from "@redux/songsSlice";
import { detailPlaylistSelector } from "@redux/selectors";

import ListSong from "./components/ListSong";

const Playlist = (props) => {
  // define
  const { playlistId } = useParams();
  const dispatch = useDispatch();

  const detailPlaylist = useSelector(detailPlaylistSelector);
  const formatDate = new Date(
    detailPlaylist?.contentLastUpdate * 1000
  ).toLocaleDateString("vi-VI");
  // hooks
  // const [date,setDate]=useState(formatDate);
  useEffect(() => {
    dispatch(getDetailPlaylist(playlistId));
  }, [playlistId]);

  // handle events

  return (
    <section className="pt-[2rem]">
      <div className="flex gap-x-6 justify-between">
        <>
          <div className="fixed top-[11rem] w-[30rem] h-full">
            <figure className="rounded-lg overflow-hidden">
              <img src={detailPlaylist?.thumbnailM} alt="" />
            </figure>
            <div className="mt-3 text-center">
              <h3 className="text-[2rem] font-bold">{detailPlaylist?.title}</h3>
              <div className="text-secondary text-[1.2rem]">
                <h4 className="mb-1">Cập nhật: {formatDate}</h4>
                <h4 className="mb-1">{detailPlaylist?.artistsNames}</h4>
                <h4 className="mb-1">
                  {Math.floor(detailPlaylist?.like / 1000)}K người yêu thích
                </h4>
              </div>
            </div>
            <div className="mt-6 text-center">
              <button className="inline-flex items-center gap-3 mb-6 uppercase text-[1.4rem] rounded-[99rem] bg-purple-primary px-10 py-3 font-medium">
                Phát ngẫu nhiên
                <span>123</span>
              </button>
              <div className="flex justify-center items-center gap-x-8">
                <button className="circle bg-alpha-bg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>
                <button className="circle bg-alpha-bg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </>
        <div className="ml-[33rem] flex-1">
          <h3 className="mb-5 text-[1.4rem]">
            <span className="text-secondary font-semibold">Lời tựa </span>
            <span className="font-medium">
              {detailPlaylist?.sortDescription}
            </span>
          </h3>
          <div className="">
            <div className="">
              <div className="flex items-center justify-between p-[1rem] text-[1.2rem] uppercase font-semibold text-secondary border-b border-border-primary">
                <span className="w-[50%] flex items-center gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
                    />
                  </svg>
                  Bài hát
                </span>
                <span className="w-[40%]">Album</span>
                <span className="text-right">Thời gian</span>
              </div>
              <div className="">
                <ListSong />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Playlist.propTypes = {};

export default Playlist;
