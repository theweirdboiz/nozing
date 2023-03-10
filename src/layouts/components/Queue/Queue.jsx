import React, { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {} from "@redux/selectors";

import SongItem from "@pages/Explore/components/songItem";
import SkeletonMedia from "@components/skeletonMedia";

import { BtnPlayNewRelease } from "@components/button";
import { songSelector } from "@redux/selectors";
import { playlistSelector } from "@redux/selectors";

const Queue = () => {
  // define
  // 0: playlist, 1: recent songs
  const { id: playlistId, data: detailPlaylist } =
    useSelector(playlistSelector);

  const [tabActive, setTabActive] = useState(0);
  const [queue, setQueue] = useState();
  const handleSetTabActive = (index) => {
    setTabActive(index);
  };

  const { isPlaying, recentSongs, isQueue, currentSongInfor } =
    useSelector(songSelector);

  // first time
  useEffect(() => {
    detailPlaylist && setQueue(detailPlaylist);
  }, [playlistId]);
  // bug
  useEffect(() => {
    isPlaying && setQueue(detailPlaylist);
  }, [playlistId, isPlaying]);

  useEffect(() => {
    isPlaying && setTabActive(0);
  }, [isPlaying]);

  return (
    <aside
      className={`h-full  ${
        (isQueue &&
          "w-[33rem] translate-x-0 transition-all duration-500 ease-out") ||
        "w-0 translate-x-full transition-all duration-500 ease-in"
      }`}
    >
      <div className="flex flex-col w-[33rem] h-full bg-queue-player-bg border border-border-primary  shadow-box-shadow-queue">
        <div className="py-[1.6rem]">
          <div className="flex gap-x-2 justify-between  px-3">
            <div className="inline-flex items-center text-[1.2rem] font-medium p-1 bg-alpha-bg rounded-[99px] flex-1">
              <div
                onClick={() => handleSetTabActive(0)}
                className={`py-[5px] rounded-[99px] flex-grow flex items-center text-secondary justify-center cursor-pointer hover:text-white ${
                  !tabActive && "bg-tab-active-bg text-white"
                }`}
              >
                <span>Danh s??ch ph??t</span>
              </div>
              <div
                onClick={() => handleSetTabActive(1)}
                className={`py-[5px] rounded-[99px] flex-grow flex items-center text-secondary justify-center cursor-pointer  hover:text-white ${
                  tabActive && "bg-tab-active-bg text-white"
                }`}
              >
                <span>Nghe g???n ????y</span>
              </div>
            </div>
            <button className="inline-block bg-alpha-bg circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <button className="inline-block bg-alpha-bg circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
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
        <div className="flex-1">
          <div className="relative w-full h-full overflow-hidden">
            <div
              className={`absolute inset-0 scrollbar-thin px-3 ${
                tabActive && "hidden"
              }`}
            >
              {currentSongInfor && (
                <SongItem
                  songId={currentSongInfor?.encodeId}
                  title={currentSongInfor?.title}
                  artists={currentSongInfor?.artists}
                  thumbnail={currentSongInfor?.thumbnail}
                  bgColor={"#9b4de0"}
                  isSmall
                />
              )}
              {detailPlaylist ? (
                <div className="mt-6 text-[1.4rem]">
                  <p className="text-secondary font-medium px-[1rem]">
                    <span className="font-bold text-white  line-clamp-1">
                      Ti???p theo
                    </span>
                    <span className="line-clamp-1">
                      <Link className="ml-1">
                        T??? play list{" "}
                        <span className="text-link-text-hover  capitalize">
                          {queue?.title}
                        </span>
                      </Link>
                    </span>
                  </p>
                  <ul className="flex flex-col gap-y-1 mt-6">
                    {queue?.song?.items?.map((item) => {
                      return (
                        <li key={item?.encodeId}>
                          <SongItem
                            songId={item?.encodeId}
                            title={item?.title}
                            artists={item?.artists}
                            thumbnail={item?.thumbnail}
                            isSmall
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                <div className="px-5">
                  <SkeletonMedia />
                  <SkeletonMedia />
                  <SkeletonMedia />
                  <SkeletonMedia />
                  <SkeletonMedia />
                  <div className="text-[1.4rem] font-semibold">
                    <p className="px-6 text-center">
                      Kh??m ph?? th??m c??c b??i h??t m???i c???a Zing MP3
                    </p>
                    <BtnPlayNewRelease />
                  </div>
                </div>
              )}
            </div>
            <div
              className={`absolute inset-0 scrollbar-thin px-3 ${
                !tabActive && "hidden"
              }`}
            >
              {detailPlaylist ? (
                <>
                  {recentSongs?.map((song, index) => {
                    return (
                      <SongItem
                        key={index}
                        songId={song?.songId}
                        title={song?.title}
                        thumbnail={song?.thumbnail}
                        artists={song?.artists}
                        isSmall
                      />
                    );
                  })}
                </>
              ) : (
                <div className="px-5">
                  <SkeletonMedia />
                  <SkeletonMedia />
                  <SkeletonMedia />
                  <SkeletonMedia />
                  <SkeletonMedia />
                  <div className="text-[1.4rem] font-semibold">
                    <p className="px-6 text-center">
                      Kh??m ph?? th??m c??c b??i h??t m???i c???a Zing MP3
                    </p>
                    <BtnPlayNewRelease />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

Queue.propTypes = {};

export default memo(Queue);
