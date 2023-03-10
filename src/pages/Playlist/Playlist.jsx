import React, { useState } from "react";
import PropTypes from "prop-types";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchDetailPlaylist } from "@redux/playlistSlice";

import ListSong from "./components/ListSong";
import songsSlice from "@redux/songsSlice";
import { playlistSelector } from "@redux/selectors";
import playlistSlice from "@redux/playlistSlice";
import { formatDate } from "@helpers/helpers";
import { randomIndex } from "../../helpers/helpers";

const Playlist = (props) => {
  // define
  const { playlistId } = useParams();
  const dispatch = useDispatch();

  const {
    data: detailPlaylist,
    isLoading,
    isPlaying,
  } = useSelector(playlistSelector);

  const [isRandom, setIsRandom] = useState(true);
  // hooks
  useEffect(() => {
    dispatch(playlistSlice.actions.setId(playlistId));
  }, []);

  useEffect(() => {
    if (playlistId) dispatch(fetchDetailPlaylist(playlistId));
  }, [playlistId]);
  useEffect(() => {
    if (isPlaying) {
      dispatch(songsSlice.actions.setIndex(0));
      dispatch(
        songsSlice.actions.setCurrentSongId(
          detailPlaylist?.song?.items[0]?.encodeId
        )
      );
      dispatch(songsSlice.actions.isPlaying(true));
    }
  }, [detailPlaylist]);

  // handle events
  const handlePlayAlbum = () => {
    dispatch(songsSlice.actions.isPlaying(false));
    dispatch(playlistSlice.actions.setIsPlaying(false));
  };
  const handlePauseAlbum = () => {
    dispatch(songsSlice.actions.isPlaying(false));
    dispatch(playlistSlice.actions.setIsPlaying(false));
  };
  const handleRandomAlbum = () => {
    const randIndex = randomIndex(detailPlaylist?.song?.items);
    dispatch(
      songsSlice.actions.setCurrentSongId(
        detailPlaylist?.song?.items[randIndex]?.encodeId
      )
    );
    dispatch(songsSlice.actions.isPlaying(true));
    dispatch(playlistSlice.actions.setIsPlaying(true));
    setIsRandom(false);
  };

  return (
    <section className="pt-[4rem] relative px-[6rem] mt-[7rem]">
      <div className="flex flex-col md:flex-row gap-x-6 justify-between">
        <>
          <div className="block md:fixed top-[11rem] w-[30rem] h-full">
            <div className="relative cursor-pointer group/item rounded-xl overflow-hidden">
              <figure
                className={`overflow-hidden ${
                  isPlaying
                    ? "rounded-full animate-rotate-center ease-in duration-1000"
                    : "rounded-xl animate-spin-off ease-out duration-500 delay-500"
                }`}
              >
                <img
                  src={detailPlaylist?.thumbnailM}
                  className="group-hover/item:scale-105 duration-500 ease-in-out "
                  alt=""
                />
              </figure>
              <div
                className={`group-hover/item:bg-opacity absolute inset-0 w-full h-full ${
                  isPlaying && "rounded-full"
                }`}
              >
                <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[50px] h-[50px] border rounded-full flex items-center justify-center ">
                  {isPlaying ? (
                    <button onClick={handlePlayAlbum}>
                      <img
                        className="w-10 "
                        src="https://raw.githubusercontent.com/sona7ns/zingmp3.vn/main/assets/img/songs/icon-playing.gif"
                        alt=""
                      />
                    </button>
                  ) : (
                    <button onClick={handlePauseAlbum}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#fff"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-3 text-center">
              <h3 className="text-[2rem] font-bold">{detailPlaylist?.title}</h3>
              <div className="text-secondary text-[1.2rem]">
                <h4 className="mb-1">
                  C???p nh???t: {formatDate(detailPlaylist?.contentLastUpdate)}
                </h4>
                <h4 className="mb-1">{detailPlaylist?.artistsNames}</h4>
                <h4 className="mb-1">
                  {Math.floor(detailPlaylist?.like / 1000)}K ng?????i y??u th??ch
                </h4>
              </div>
            </div>
            <div className="mt-6 text-center">
              {/* className="inline-flex items-center gap-3 mb-6 uppercase text-[1.4rem] rounded-[99rem] bg-purple-primary px-10 py-3.5 font-medium" */}
              {isRandom ? (
                <button onClick={handleRandomAlbum}>Phat ngau nhien</button>
              ) : isPlaying ? (
                <button onClick={handlePauseAlbum}>Tam dung</button>
              ) : (
                <button onClick={handlePlayAlbum}>Tiep tuc phat</button>
              )}
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
        <div className="md:ml-[33rem] flex-1">
          <h3 className="mb-5 text-[1.4rem]">
            <span className="text-secondary font-semibold">L???i t???a </span>
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
                  B??i h??t
                </span>
                <span className="w-[40%]">Album</span>
                <span className="text-right">Th???i gian</span>
              </div>
              <div className="">
                <ListSong data={detailPlaylist} status={isLoading} />
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
