import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import songsSlice, { fetchDetailSong, fetchLyricSong } from "@redux/songsSlice";
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
  lyricSongSelector,
} from "@redux/selectors";
import { useRef } from "react";
import { useState } from "react";
import { formatDuration, trimLink } from "@helpers/helpers";
import playlistSlice from "@redux/playlistSlice";
import { audioSelector } from "@redux/selectors";
import audioSlice from "../../../redux/audioSlice";

const Player = () => {
  // define
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const songAudio = useSelector(audioSelector);

  console.log(songAudio);

  const audio = useRef(new Audio());
  const currentSentenceHightlight = useRef();

  const [tabActive, setTabActive] = useState(0);

  const [isToggleLyric, setIsToggleLyric] = useState(0);

  const [currentTime, setCurrentTime] = useState(audio.current.currentTime);

  const initLyric = {
    sentenceIndex: null,
    isPassed: false,
  };
  const timeToHighlight = (currentTime * 1000).toFixed(0);

  const [lyric, setLyric] = useState(initLyric);

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

  const lyricSong = useSelector(lyricSongSelector);

  // hooks
  const trackProgressbar = useRef();
  const thumbProgressBar = useRef();
  const trackVolume = useRef();
  const thumbVolume = useRef();

  const [mute, setMute] = useState(false);

  const handleNavigator = (e, link) => {
    e.stopPropagation();
    navigator(trimLink(link));
  };

  // the first load
  useEffect(() => {
    // check exist currentSongInfor?
    if (currentSongInfor?.encodeId) {
      // notice store save current song to recent songs
      dispatch(
        songsSlice.actions.setRecentSongs({
          songId: currentSongInfor?.encodeId,
          title: currentSongInfor?.title,
          thumbnail: currentSongInfor?.thumbnail,
          artists: currentSongInfor?.artists,
        })
      );
    }
    // notice store save detail current song
    dispatch(fetchDetailSong(currentSongId));
    // notice store save lyric current song
    dispatch(fetchLyricSong(currentSongId));
  }, [currentSongId]);

  // the first load
  useEffect(() => {
    audio.current.pause();
    if (currentSong) {
      audio.current.src = currentSong?.[128];
      dispatch(audioSlice.actions.setSrc(currentSong?.[128]));
    }
  }, [currentSong]);

  // first load
  useEffect(() => {
    // handle volume
    if (mute) {
      audio.current.volume = 0.0;
      thumbVolume.current.style.cssText = `width: 0px`;
    } else {
      const trackRect = trackVolume.current.getBoundingClientRect();
      audio.current.volume = 0.75;
      console.log(audio.current.volume);
      thumbVolume.current.style.cssText = `width: ${0.75 * trackRect.width}px`;
    }
  }, [mute]);

  useEffect(() => {
    // handle lyric song
    if (currentSentenceHightlight.current) {
      currentSentenceHightlight.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  }, [currentSentenceHightlight.current]);

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
  const handleMute = (e) => {
    e.stopPropagation();
    setMute((prev) => !prev);
  };
  // when toggle play/pause
  const handlePlaySong = (e) => {
    e.stopPropagation();
    if (isPlaying) {
      audio.current.pause();
    } else {
      audio.current.play();
    }
  };
  // when seek time
  const handleSeekTime = (e) => {
    e.stopPropagation();

    const trackRect = trackProgressbar.current.getBoundingClientRect();

    const percent = ((e.clientX - trackRect.left) * 100) / trackRect.width;
    thumbProgressBar.current.style.cssText = `width: ${percent}`;
    audio.current.currentTime = (percent * currentSongInfor?.duration) / 100;

    audio.current.play();
  };
  // handle next song
  const handleNextSong = (e) => {
    e.stopPropagation();

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
  const handlePrevSong = (e) => {
    e.stopPropagation();

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
  const handleRepeatSong = (e) => {
    e.stopPropagation();

    dispatch(songsSlice.actions.setIsRepeat(!isReapeat));
  };
  // hande random song
  const handleRandomSong = (e) => {
    e.stopPropagation();

    dispatch(songsSlice.actions.setIsRandom(!isRandom));
  };

  const handleClickPlayer = (e) => {
    e.stopPropagation();

    navigator(trimLink(currentSongInfor?.album?.link));
  };
  const handleToggleLyric = (e) => {
    e.stopPropagation();

    setIsToggleLyric((prev) => !prev);
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
    dispatch(playlistSlice.actions.setIsPlayling(false));
  };
  // when song is update
  audio.current.ontimeupdate = () => {
    setCurrentTime(audio.current.currentTime);

    const numberPixel =
      (audio.current.currentTime * trackProgressbar.current.offsetWidth) /
      currentSongInfor?.duration;

    thumbProgressBar.current.style.cssText = `width: ${numberPixel}px`;

    lyricSong?.sentences?.map((sentence, index) => {
      if (timeToHighlight >= sentence?.words[0].startTime) {
        setLyric({
          sentenceIndex: index,
          color: "yellow",
        });
        return index;
      }
    });
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

      // dispatch thunk actions
      dispatch(songsSlice.actions.setIndex(currentSongIndex));
      dispatch(songsSlice.actions.setCurrentSongId(currentSongId));
      dispatch(songsSlice.actions.isPlaying(true));

      audio.current.play();
    } else {
      handleNextSong();
    }
  };
  return (
    <>
      <section
        className={`bottom-0 left-0 right-0 px-[2rem] border-t border-border-primary ${
          currentSong && currentSongInfor ? "flex" : "hidden"
        } items-center justify-between bg-layout-bg cursor-pointer`}
        onClick={handleClickPlayer}
      >
        <div className="flex h-[9rem] py-5 w-[30%]">
          <div className="flex justify-start items-center gap-x-5">
            <Link>
              <figure className="w-[6.4rem] h-[6.4rem] rounded-md overflow-hidden">
                <img src={currentSongInfor?.thumbnail} alt="thumbail" />
              </figure>
            </Link>
            <div>
              <h3 className="text-[1.4rem] font-semibold">
                <span
                  onClick={(e) => handleNavigator(e, currentSongInfor?.link)}
                >
                  {currentSongInfor?.title}
                </span>
              </h3>
              <p className="text-[1.2rem] font-medium text-secondary hover:text-link-text-hover hover:underline">
                {currentSongInfor?.artists
                  ?.map((artist, index) => artist?.name)
                  ?.join(", --")
                  ?.split("--")
                  ?.map((artist, index) => {
                    return (
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          navigator(currentSongInfor?.artists[index]?.link);
                        }}
                        key={currentSongInfor?.artists[index]?.id}
                        className="font-medium hover:underline hover:text-link-text-hover cursor-pointer"
                      >
                        {artist}
                      </span>
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
        <div className="flex flex-col flex-1 relative z-[222]">
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
          <button onClick={handleToggleLyric} className="circle">
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
      <section
        className={`fixed inset-0 bg-layout-bg z-[123] px-[2rem]
       ${isToggleLyric ? "fixed" : "hidden"}
      `}
      >
        <div className="absolute inset-0 bg-random bg-center bg-cover bg-no-repeat blur-2xl "></div>
        <div className="relative z-10">
          <header className="py-[2rem] flex items-center justify-between">
            <div className="">
              <img
                src="https://zjs.zmdcdn.me/zmp3-desktop/dev/119956/static/media/icon_zing_mp3_60.f6b51045.svg"
                alt=""
              />
            </div>
            <div className="flex rounded-full p-1 bg-alpha-bg font-bold ml-[10rem]">
              <div
                onClick={() => setTabActive(2)}
                className={`px-[5rem] py-[6px] rounded-full text-secondary cursor-pointer
              ${tabActive === 2 && "bg-tab-active-bg text-white"}
              `}
              >
                Danh sách phát
              </div>
              <div
                onClick={() => setTabActive(1)}
                className={`px-[5rem] py-[6px]  rounded-full text-secondary cursor-pointer
               ${tabActive === 1 && "bg-tab-active-bg text-white"}
               `}
              >
                Karaoke
              </div>
              <div
                onClick={() => setTabActive(0)}
                className={`px-[5rem] py-[6px]  rounded-full text-secondary cursor-pointer
               ${tabActive === 0 && "bg-tab-active-bg text-white"}
               `}
              >
                Lời bài hát
              </div>
            </div>
            <div className="flex items-center gap-x-5">
              <button className="circle__large bg-hover-circle hover:brightness-95">
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
                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  />
                </svg>
              </button>
              <button className="circle__large bg-hover-circle hover:brightness-95">
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
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
              <button
                className="circle__large bg-hover-circle hover:brightness-95"
                onClick={handleToggleLyric}
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
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>
          </header>
          <div className="flex items-center gap-x-10 mx-[10rem] my-6">
            <img
              src={currentSongInfor?.thumbnailM}
              className="w-[50rem] max-w-[80%] rounded-2xl"
              alt=""
            />
            <div className="max-h-[52rem] py-2 overflow-y-scroll scrollbar-hide ml-5 gradient-mask-t-50">
              {lyricSong?.sentences?.map((sentence, index) => (
                <p
                  ref={
                    index === lyric.sentenceIndex
                      ? currentSentenceHightlight
                      : undefined
                  }
                  key={index}
                  className={`
                  px-[2rem] py-[1rem] text-[4rem] font-bold
                  ${index === lyric.sentenceIndex && "text-vip"}
                  ${lyric.isPassed ? "text-secondary" : "text-white"}
                  `}
                >
                  {sentence?.words
                    ?.map((word, index) => word?.data)
                    ?.join(", ")
                    ?.split(",")
                    ?.map((res, index) => {
                      return <span key={index}>{res}</span>;
                    })}
                </p>
              ))}
            </div>
          </div>
        </div>
        <p className="relative z-10 mt-[7rem] text-center text-secondary font-semibold text-[1.4rem]">
          <span className="text-white">{currentSongInfor?.title} - </span>
          <span>
            {currentSongInfor?.artists
              ?.map((artist) => artist.name)
              ?.join(", ")
              ?.split(",")
              ?.map((item) => item)}
          </span>
        </p>
      </section>
    </>
  );
};

Player.propTypes = {};

export default memo(Player);
