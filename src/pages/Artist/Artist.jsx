import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtist } from "@redux/songsSlice";
import { currentArtistSelector } from "@redux/selectors";
import MediaItem from "@components/MediaItem";
import Album from "@pages/Explore/components/album";
import MvCard from "@components/mvCard/MvCard";
import ArtistCard from "@components/artistCard";

const Artist = (props) => {
  const { artist } = useParams();

  const dispatch = useDispatch();

  const currentArtist = useSelector(currentArtistSelector);

  const bgRef = useRef();

  useEffect(() => {
    dispatch(fetchArtist(artist));
    bgRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [artist]);

  return (
    <section>
      <div className={`relative h-[30rem] overflow-hidden`} ref={bgRef}>
        <div
          style={{ backgroundImage: `url(${currentArtist?.thumbnail})` }}
          className="absolute inset-0 bg-no-repet bg-cover blur-[5rem] bg-center"
        ></div>
        <div className={`absolute inset-0 bg-artist-bg z-10`}></div>
        <div className={`absolute bottom-0 z-20 flex gap-x-12 mb-8 ml-20`}>
          <figure className="rounded-full overflow-hidden w-[14rem] h-[14rem]">
            <img src={currentArtist?.thumbnail} alt="" />
          </figure>
          <div>
            <div className="flex items-center gap-x-8">
              <h3 className="font-extrabold text-[5.4rem]">
                {currentArtist?.name}
              </h3>
              <button className="flex items-center justify-center p-4 rounded-full bg-purple-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 translate-x-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="font-semibold text-[1.4rem]">
                {currentArtist?.totalFollow} người quan tâm
              </span>
              <div className="flex items-center gap-x-2 text-[1.2rem] rounded-full border border-border-primary cursor-pointer px-6 py-1 hover:backdrop-brightness-110">
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
                    d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                  />
                </svg>
                <span className="uppercase">Quan tâm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-[4rem] px-[6rem]">
        <h3 className="mb-[2rem] font-bold capitalize text-[2rem] flex justify-between">
          <span>Bài hát nổi bật</span>
          <div className="uppercase flex gap-x-2 text-[1.2rem] font-semibold text-secondary">
            Tất cả
          </div>
        </h3>
        <div className="grid grid-cols-2 gap-x-8">
          {currentArtist?.sections
            ?.find((section) => section.sectionId === "aSongs")
            ?.items?.slice(0, 6)
            .map((item, index) => {
              return (
                <MediaItem
                  key={item?.encodeId}
                  songId={item?.encodeId}
                  thumbnail={item?.thumbnail}
                  artists={item?.artists}
                  title={item?.title}
                  duration={item?.duration}
                  index={index}
                />
              );
            })}
        </div>
      </section>
      <section className="mt-[2rem] px-[6rem]">
        <h3 className="mb-[2rem] font-bold capitalize text-[2rem] flex justify-between">
          <span>Playlist/Album</span>
          <div className="uppercase flex gap-x-2 text-[1.2rem] font-semibold text-secondary">
            Tất cả
          </div>
        </h3>
        <div className="grid grid-cols-5 gap-x-8">
          {currentArtist?.sections
            ?.find((section) => section.sectionId === "aSingle")
            ?.items?.slice(0, 5)
            .map((item) => {
              return (
                <Album
                  key={item?.encodeId}
                  sectionId={item?.sectionId}
                  encodeId={item?.encodeId}
                  thumbnail={item?.thumbnail}
                  title={item?.title}
                  artists={item?.playlists?.artists}
                  link={item?.link}
                />
              );
            })}
        </div>
      </section>

      <section className="mt-[2rem] px-[6rem]">
        <h3 className="mb-[2rem] font-bold capitalize text-[2rem] flex justify-between">
          <span>Single & EP</span>
          <div className="uppercase flex gap-x-2 text-[1.2rem] font-semibold text-secondary">
            Tất cả
          </div>
        </h3>
        <div className="grid grid-cols-5 gap-x-8">
          {currentArtist?.sections
            ?.find((section) => section.sectionId === "aAlbum")
            ?.items?.slice(0, 5)
            .map((item) => {
              return (
                <Album
                  key={item?.encodeId}
                  sectionId={item?.sectionId}
                  encodeId={item?.encodeId}
                  thumbnail={item?.thumbnail}
                  title={item?.title}
                  artists={item?.playlists?.artists}
                  link={item?.link}
                />
              );
            })}
        </div>
      </section>
      <section className="mt-[2rem] px-[6rem]">
        <h3 className="mb-[2rem] font-bold capitalize text-[2rem] flex justify-between">
          <span>MV</span>
          <div className="uppercase flex gap-x-2 text-[1.2rem] font-semibold text-secondary">
            Tất cả
          </div>
        </h3>
        <div className="grid grid-cols-3 gap-x-8">
          {currentArtist?.sections
            ?.find((section) => section.sectionId === "aMV")
            ?.items?.slice(0, 3)
            .map((item) => {
              return (
                <MvCard
                  key={item?.encodeId}
                  encodeId={item?.encodeId}
                  title={item?.title}
                  thumbnailM={item?.thumbnailM}
                  artists={item?.artists}
                  duration={item?.duration}
                  link={item?.link}
                  artistImg={item?.artist?.thumbnail}
                ></MvCard>
              );
            })}
        </div>
      </section>
      <section className="mt-[2rem] px-[6rem]">
        <h3 className="mb-[2rem] font-bold capitalize text-[2rem] flex justify-between">
          <span>Xuất hiện trong</span>
          <div className="uppercase flex gap-x-2 text-[1.2rem] font-semibold text-secondary">
            Tất cả
          </div>
        </h3>
        <div className="grid grid-cols-5 gap-x-8">
          {currentArtist?.sections
            ?.find(
              (section) =>
                section.sectionId === "aPlaylist" &&
                section.title === "Xuất hiện trong"
            )
            ?.items?.slice(0, 5)
            .map((item) => {
              return (
                <Album
                  key={item?.encodeId}
                  sectionId={item?.sectionId}
                  encodeId={item?.encodeId}
                  thumbnail={item?.thumbnail}
                  title={item?.title}
                  artists={item?.playlists?.artists}
                  link={item?.link}
                />
              );
            })}
        </div>
      </section>
      <section className="mt-[2rem] px-[6rem]">
        <h3 className="mb-[2rem] font-bold capitalize text-[2rem] flex justify-between">
          <span>Tuyển tập</span>
          <div className="uppercase flex gap-x-2 text-[1.2rem] font-semibold text-secondary">
            Tất cả
          </div>
        </h3>
        <div className="grid grid-cols-5 gap-x-8">
          {currentArtist?.sections
            ?.find((section) => section.sectionId === "aPlaylist")
            ?.items?.slice(0, 5)
            .map((item) => {
              return (
                <Album
                  key={item?.encodeId}
                  sectionId={item?.sectionId}
                  encodeId={item?.encodeId}
                  thumbnail={item?.thumbnail}
                  title={item?.title}
                  artists={item?.playlists?.artists}
                  link={item?.link}
                />
              );
            })}
        </div>
      </section>
      <section className="mt-[2rem] px-[6rem]">
        <h3 className="mb-[2rem] font-bold capitalize text-[2rem] flex justify-between">
          <span>Bạn có thể thích</span>
          <div className="uppercase flex gap-x-2 text-[1.2rem] font-semibold text-secondary">
            Tất cả
          </div>
        </h3>
        <div className="grid grid-cols-5 gap-x-8">
          {currentArtist?.sections
            ?.find((section) => section.sectionId === "aReArtist")
            ?.items?.slice(0, 5)
            .map((item) => {
              return (
                <ArtistCard
                  key={item?.id}
                  id={item?.id}
                  link={item?.link}
                  name={item?.name}
                  thumbnail={item?.thumbnail}
                  follow={item?.totalFollow}
                />
              );
            })}
        </div>
      </section>
      <section className="mt-[2rem] px-[6rem] max-w-[86rem]">
        <h3 className="mb-[2rem] font-bold capitalize text-[2rem] flex justify-between">
          <span>Về {currentArtist?.name}</span>
        </h3>
        <div className="flex gap-x-12">
          <figure className="w-[37rem] h-[26rem] rounded-xl overflow-hidden flex-shrink-0">
            <img src={currentArtist?.thumbnailM} alt="" />
          </figure>
          <div>
            <p
              dangerouslySetInnerHTML={{ __html: currentArtist?.biography }}
              className="text-secondary font-medium text-[1.4rem] mb-10 line-clamp-6"
            ></p>
            <div className="flex items-center gap-x-20">
              <h4>
                <span className="font-bold text-[2rem]">
                  {currentArtist?.follow}
                </span>
                <span className="text-[1.4rem] text-secondary font-medium">
                  Người quan tâm
                </span>
              </h4>
              <h4>
                <span className="font-bold text-[2rem]">
                  {currentArtist?.awards?.length}
                </span>
                <span className="text-[1.4rem] text-secondary font-medium">
                  Giải thưởng
                </span>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

Artist.propTypes = {};

export default Artist;
