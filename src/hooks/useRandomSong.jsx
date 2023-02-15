import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import songsSlice from "@redux/songsSlice";

const useRandomSong = (playlist) => {
  const [song, setSong] = useState({
    currentIndex: null,
    currentId: null,
  });

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * (playlist.length - 1));
    const randomSongId = playlist[randomIndex]?.encodeId;

    setSong({
      currentIndex: randomIndex,
      currentId: randomSongId,
    });
  }, [playlist]);
};

export default useRandomSong;
