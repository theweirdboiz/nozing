import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import songsSlice, { fetchDetailSong } from "@redux/songsSlice";
import {
  currentSongSelector,
  isPlayingSelector,
  currentSongInforSelector,
  currentSongIdSelector,
  detailPlaylistSelector,
  currentSongIndexSelector,
  isRepeatSelector,
  isRandomSelector,
  isLoadedSelector,
  isQueueSelector,
} from "@redux/selectors";
import { useRef } from "react";
import { useState } from "react";

const Player = () => {
  // define
  const dispatch = useDispatch();

  const audio = useRef(new Audio());

  // elements
  const detailPlaylist = useSelector(detailPlaylistSelector);

  const isPlaying = useSelector(isPlayingSelector);

  const isQueue = useSelector(isQueueSelector);

  // get current song id from store
  const currentSongId = useSelector(currentSongIdSelector);

  // get current song from store
  const currentSongInfor = useSelector(currentSongInforSelector);

  const currentSong = useSelector(currentSongSelector);

  const currentSongIndex = useSelector(currentSongIndexSelector);

  const isReapeat = useSelector(isRepeatSelector);

  const isRandom = useSelector(isRandomSelector);

  const isLoaded = useSelector(isLoadedSelector);

  // hooks
  const trackProgressbar = useRef();
  const thumbProgressBar = useRef();
  const trackVolume = useRef();
  const thumbVolume = useRef();

  const [mute, setMute] = useState(0);

  useEffect(() => {
    dispatch(songsSlice.actions.setIsLoaded(false));
    if (currentSongInfor?.encodeId) {
      dispatch(
        songsSlice.actions.setRecentSongs({
          songId: currentSongInfor?.encodeId,
          title: currentSongInfor?.title,
          thumbnail: currentSongInfor?.thumbnail,
          artists: currentSongInfor?.artists,
        })
      );
    }
    dispatch(fetchDetailSong(currentSongId));
  }, [currentSongId]);

  useEffect(() => {
    audio.current.pause();
    audio.current.src = currentSong?.[128];
  }, [currentSong]);

  useEffect(() => {
    if (mute) {
      audio.current.volume = 0.0;
      thumbVolume.current.style.cssText = `width: 0px`;
    } else {
      const trackRect = trackVolume.current.getBoundingClientRect();
      audio.current.volume = 0.75;
      thumbVolume.current.style.cssText = `width: ${0.75 * trackRect.width}px`;
    }
  }, [mute]);

  const [currentTime, setCurrentTime] = useState(audio.current.currentTime);

  // handle events
  // when change volume
  const handleChangeVolume = (e) => {
    e.stopPropagation();
    const trackRect = trackVolume.current.getBoundingClientRect();
    const percent = +((e.clientX - trackRect.left) / trackRect.width).toFixed(
      2
    );
    thumbVolume.current.style.cssText = `width: ${percent * trackRect.width}px`;
    audio.current.volume = percent;
  };
  // when toggle mute/unmute volume
  const handleMute = () => {
    setMute((prev) => !prev);
  };
  // when toggle play/pause
  const handlePlaySong = () => {
    if (isPlaying) {
      audio.current.pause();
    } else {
      audio.current.play();
    }
  };
  // when seek time
  const handleSeekTime = (e) => {
    const trackRect = trackProgressbar.current.getBoundingClientRect();

    const percent = ((e.clientX - trackRect.left) * 100) / trackRect.width;
    thumbProgressBar.current.style.cssText = `width: ${percent}`;
    audio.current.currentTime = (percent * currentSongInfor?.duration) / 100;

    audio.current.play();
  };
  // handle next song
  const handleNextSong = () => {
    const songNextIndex =
      currentSongIndex + 1 >= detailPlaylist?.song.total
        ? 0
        : currentSongIndex + 1;
    const songNextId = detailPlaylist.song.items[songNextIndex]?.encodeId;

    dispatch(songsSlice.actions.setIndex(songNextIndex));
    dispatch(songsSlice.actions.setCurrentSongId(songNextId));
    dispatch(songsSlice.actions.isPlaying(true));
  };
  // handle prev song
  const handlePrevSong = () => {
    const songPrevIndex =
      currentSongIndex - 1 < 0
        ? detailPlaylist?.song?.total - 1
        : currentSongIndex - 1;
    const songPrevId = detailPlaylist?.song?.items[songPrevIndex]?.encodeId;

    dispatch(songsSlice.actions.setIndex(songPrevIndex));
    dispatch(songsSlice.actions.setCurrentSongId(songPrevId));
    dispatch(songsSlice.actions.isPlaying(true));
  };
  // hande repeat song
  const handleRepeatSong = () => {
    dispatch(songsSlice.actions.setIsRepeat(!isReapeat));
  };
  // hande random song
  const handleRandomSong = () => {
    dispatch(songsSlice.actions.setIsRandom(!isRandom));
  };
  // when song is load
  audio.current.onloadeddata = () => {
    audio.current.pause();
    dispatch(songsSlice.actions.setIsLoaded(true));
    audio.current.volume = +thumbVolume.current.clientWidth / 100;

    if (isPlaying) {
      audio.current.play();
    }
  };
  // when song is play
  audio.current.onplay = () => {
    dispatch(songsSlice.actions.isPlaying(true));
  };
  audio.current.onpause = () => {
    dispatch(songsSlice.actions.isPlaying(false));
  };
  // when song is update
  audio.current.ontimeupdate = () => {
    setCurrentTime(audio.current.currentTime);
    const numberPixel =
      (audio.current.currentTime * trackProgressbar.current.offsetWidth) /
      currentSongInfor?.duration;
    thumbProgressBar.current.style.cssText = `width: ${numberPixel}px`;
  };
  // when song is end
  audio.current.onended = () => {
    if (isRandom) {
      const randomIndex = Math.floor(
        Math.random() * (detailPlaylist?.song?.total - 1)
      );
      const randomSongId = detailPlaylist?.song?.items[randomIndex]?.encodeId;
      dispatch(songsSlice.actions.setIndex(randomIndex));
      dispatch(songsSlice.actions.setCurrentSongId(randomSongId));
      dispatch(songsSlice.actions.isPlaying(true));
    }
    if (isReapeat) {
      audio.current.currentTime = 0;
      setCurrentTime(0);
      dispatch(songsSlice.actions.setIndex(currentSongIndex));
      dispatch(songsSlice.actions.setCurrentSongId(currentSongId));
      dispatch(songsSlice.actions.isPlaying(true));
      audio.current.play();
    } else {
      handleNextSong();
    }
  };
  const prefixTime = (time) => {
    return time > 9 ? time : `0${time}`;
  };
  const formatDuration = (t) => {
    // 1p = 60
    // ? = 230
    const time = Number.parseInt(t);
    const hour = Math.floor(time / 3600);
    const minute = Math.floor((time - hour * 3600) / 60);
    const second = time - (hour * 3600 + minute * 60);
    // return
    const hourPrefix = prefixTime(hour);
    const minutePrefix = prefixTime(minute);
    const secondPrefix = prefixTime(second);
    if (hour > 0) {
      return `${hourPrefix}:${minutePrefix}:${secondPrefix}`;
    }
    return `${minutePrefix}:${secondPrefix}`;
  };

  return (
    <section className="fixed bottom-0 left-0 right-0 px-[2rem] border-t border-border-primary flex items-center justify-between bg-layout-bg">
      <div className="flex h-[9rem] py-5 w-[30%]">
        <div className="flex justify-start items-center gap-x-5">
          <Link>
            <figure className="w-[6.4rem] h-[6.4rem] rounded-md overflow-hidden">
              <img src={currentSongInfor?.thumbnail} alt="thumbail" />
            </figure>
          </Link>
          <div>
            <h3 className="text-[1.4rem] font-semibold">
              <Link>{currentSongInfor?.title}</Link>
            </h3>
            <p>
              {currentSongInfor?.artists?.map((artist) => {
                return (
                  <Link key={artist?.id}>
                    <span className="text-[1.2rem] font-medium text-secondary hover:text-link-text-hover hover:underline">
                      {artist?.name}{" "}
                    </span>
                  </Link>
                );
              })}
            </p>
          </div>
          <div className="ml-6 flex gap-x-4">
            <button className="circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
            <button className="inline-flex items-center justify-center p-1 rounded-[99px] w-[3.2rem] h-[3.2rem] hover:bg-hover-circle">
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
      {/* Player control */}
      <div className="flex flex-col flex-1">
        <div className="flex gap-x-8 items-center justify-center">
          {/* random */}
          <button
            className={`circle ${isRandom && "text-link-text-hover"}`}
            onClick={handleRandomSong}
          >
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
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              />
            </svg>
          </button>
          {/* prev */}
          <button className="circle" onClick={handlePrevSong}>
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
                d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
              />
            </svg>
          </button>
          {/* play */}
          <button
            className="hover:text-link-text-hover"
            onClick={handlePlaySong}
          >
            {!isLoaded ? (
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.0}
                stroke="currentColor"
                className="w-16 h-16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <circle cx="12" cy="2.5" r="1.5" opacity=".14" />
                  <circle cx="16.75" cy="3.77" r="1.5" opacity=".29" />
                  <circle cx="20.23" cy="7.25" r="1.5" opacity=".43" />
                  <circle cx="21.50" cy="12.00" r="1.5" opacity=".57" />
                  <circle cx="20.23" cy="16.75" r="1.5" opacity=".71" />
                  <circle cx="16.75" cy="20.23" r="1.5" opacity=".86" />
                  <circle cx="12" cy="21.5" r="1.5" />
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    calcMode="discrete"
                    dur="0.75s"
                    values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"
                    repeatCount="indefinite"
                  />
                </g>
              </svg>
            ) : isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.0}
                stroke="currentColor"
                className="w-16 h-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.0}
                stroke="currentColor"
                className="w-16 h-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                />
              </svg>
            )}
          </button>
          {/* next */}
          <button
            className={`circle ${
              !detailPlaylist && "pointer-events-none text-secondary"
            }`}
            onClick={handleNextSong}
          >
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
                d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
              />
            </svg>
          </button>
          {/* repeat */}
          <button
            className={`circle ${isReapeat && "text-link-text-hover"}`}
            onClick={handleRepeatSong}
          >
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
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
          </button>
        </div>
        <div className="flex gap-x-3 items-center text-secondary text-[1.2rem] mt-2">
          <span>{formatDuration(currentTime)}</span>
          {/* progress bar */}
          <div
            ref={trackProgressbar}
            onClick={handleSeekTime}
            className="relative h-[2.5px] bg-secondary w-full rounded-l-full rounded-r-full cursor-pointer hover:py-1"
          >
            <div
              ref={thumbProgressBar}
              className="absolute top-0 left-0 w-0 h-full bg-white rounded-l-full rounded-r-full"
            ></div>
          </div>
          <span className="text-white">
            {formatDuration(currentSongInfor?.duration)}
          </span>
        </div>
      </div>
      {/* option */}
      <div className="w-[30%] flex items-center justify-end gap-x-2">
        <button className="circle">
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
              d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
            />
          </svg>
        </button>
        <button className="circle">
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
              d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
            />
          </svg>
        </button>
        <button className="circle">
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
              d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
        <div className="flex items-center gap-x-3">
          <button onClick={handleMute} className="circle">
            {!mute ? (
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
                  d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                />
              </svg>
            ) : (
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
                  d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
                />
              </svg>
            )}
          </button>
          <div
            ref={trackVolume}
            onClick={handleChangeVolume}
            className="w-[7rem] h-[3px] hover:py-1 rounded-xl relative bg-sidebar-bg group/item cursor-pointer"
          >
            <div
              ref={thumbVolume}
              className="absolute w-2/5 h-full inset-0 bg-white rounded-xl"
            >
              <div className="hidden group-hover/item:block absolute w-5 h-5 rounded-full right-0 top-[50%] -translate-y-[50%] bg-white"></div>
            </div>
          </div>
        </div>
        <div className="h-16 border-l ml-6 border-border-primary"></div>
        <button
          onClick={() => {
            dispatch(songsSlice.actions.setIsQueue(!isQueue));
          }}
          className={`${
            (isQueue && "bg-purple-primary") || "bg-alpha-bg"
          } ml-5 p-2 rounded-lg hover:text-secondary`}
        >
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
              d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

Player.propTypes = {};

export default memo(Player);
