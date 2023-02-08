import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { searchDataSelector } from "@redux/selectors";

import { Navbar } from "./components";
import MediaItem from "@components/MediaItem";
import Album from "@pages/Explore/components/album";
import ArtistCard from "@components/artistCard";

const SearchAll = (props) => {
  const searchData = useSelector(searchDataSelector);

  const isArtist = searchData?.top?.objectType === "artist";

  return (
    <div>
      <section className="mt-[2rem]">
        <h3 className="mb-[2rem] font-bold capitalize text-[2rem] flex justify-between">
          <span>Bài hát</span>
          <div className="uppercase flex gap-x-2 text-[1.2rem] font-semibold text-secondary">
            Tất cả
          </div>
        </h3>
        <div className="grid grid-cols-2 gap-x-8">
          {searchData?.songs?.map((song, index) => {
            return (
              <MediaItem
                key={song?.encodeId}
                songId={song?.encodeId}
                thumbnail={song?.thumbnail}
                artists={song?.artists}
                title={song?.title}
                duration={song?.duration}
                index={index}
              />
            );
          })}
        </div>
      </section>
      <section className="mt-[2rem]">
        <h3 className="mb-[2rem] font-bold capitalize text-[2rem] flex justify-between">
          <span>Playlist/Album</span>
          <div className="uppercase flex gap-x-2 text-[1.2rem] font-semibold text-secondary">
            Tất cả
          </div>
        </h3>
        <div className="grid grid-cols-5 gap-x-8">
          {searchData?.playlists?.slice(0, 5).map((item) => {
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
      <section className="mt-[2rem]">
        <h3 className="mb-[2rem] font-bold capitalize text-[2rem] flex justify-between">
          <span>Nghệ sĩ/OA</span>
          <div className="uppercase flex gap-x-2 text-[1.2rem] font-semibold text-secondary">
            Tất cả
          </div>
        </h3>
        <div className="grid grid-cols-5 gap-x-8">
          {searchData?.artists?.map((artist) => {
            return (
              <ArtistCard
                key={artist?.id}
                id={artist?.id}
                link={artist?.link}
                name={artist?.name}
                thumbnail={artist?.thumbnail}
                follow={artist?.totalFollow}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

SearchAll.propTypes = {};

export default SearchAll;
