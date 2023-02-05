import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  currentSongInforSelector,
  detailPlaylistSelector,
  currentPlaylistIdSelector,
  isPlayingSelector,
} from "@redux/selectors";

import { getDetailPlaylist } from "@redux/songsSlice";
import SongItem from "@pages/Explore/components/songItem";

const Queue = () => {
  // define
  const [tabActive, setTabActive] = useState(0);
  const [queue, setQueue] = useState([]);
  const handleSetTabActive = (index) => {
    setTabActive(index);
  };
  const dispatch = useDispatch();

  const currentSongInfor = useSelector(currentSongInforSelector);

  const detailPlaylist = useSelector(detailPlaylistSelector);

  const currentPlaylistId = useSelector(currentPlaylistIdSelector);

  const isPlaying = useSelector(isPlayingSelector);

  useEffect(() => {
    if (currentPlaylistId && isPlaying) {
      setQueue(detailPlaylist);
    }
  }, [detailPlaylist, isPlaying]);

  return (
    /* */
    <aside className="h-full">
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
                <span>Danh sách phát</span>
              </div>
              <div
                onClick={() => handleSetTabActive(1)}
                className={`py-[5px] rounded-[99px] flex-grow flex items-center text-secondary justify-center cursor-pointer  hover:text-white ${
                  tabActive && "bg-tab-active-bg text-white"
                }`}
              >
                <span>Nghe gần đây</span>
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
            <div className="absolute inset-0 scrollbar-thin px-3">
              <SongItem
                songId={currentSongInfor?.encodeId}
                title={currentSongInfor?.title}
                artists={currentSongInfor?.artists}
                thumbnail={currentSongInfor?.thumbnail}
                bgColor={"#9b4de0"}
                isSmall
              />
              <div className="mt-6 text-[1.4rem]">
                <p className="text-secondary font-medium px-[1rem]">
                  <span className="font-bold text-white  line-clamp-1">
                    Tiếp theo
                  </span>
                  <span className="line-clamp-1">
                    <Link className="ml-1">
                      Từ play list{" "}
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
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

Queue.propTypes = {};

export default Queue;
