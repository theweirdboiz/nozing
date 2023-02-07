import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { searchDataSelector } from "@redux/selectors";

import { Navbar } from "./components";
import MediaItem from "@components/MediaItem";
import Album from "@pages/Explore/components/album";

const SearchAll = (props) => {
  const searchData = useSelector(searchDataSelector);

  console.log(searchData);
  const isArtist = searchData?.top?.objectType === "artist";

  // 1 -> 1 follow
  // 10 10 follow
  // 100 100 follow
  // 1000 1K follow
  // 10000 10k follow
  // 100000 100k follow
  // 1000000 1M follow

  return (
    <div>
      <Navbar />
      {/* <section className="">
        <h3 className="mb-[2rem] font-bold capitalize text-[2rem]">Nổi bật</h3>
        <div className="grid grid-cols-3 gap-x-[2.8rem]"></div>
      </section> */}
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
            return <Album key={item?.encodeId} data={item} />;
          })}
        </div>
      </section>
    </div>
  );
};

SearchAll.propTypes = {};

export default SearchAll;
