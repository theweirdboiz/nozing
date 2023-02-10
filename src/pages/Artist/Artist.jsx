import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtist } from "@redux/songsSlice";
import { currentArtistSelector } from "@redux/selectors";
const Artist = (props) => {
  const { artist } = useParams();

  const dispatch = useDispatch();

  const currentArtist = useSelector(currentArtistSelector);

  useEffect(() => {
    dispatch(fetchArtist(artist));
    console.log(currentArtist);
  }, []);

  return (
    <div>
      {currentArtist?.name}
      {currentArtist?.realname}
      <img src={currentArtist?.thumbnail} alt="" />
    </div>
  );
};

Artist.propTypes = {};

export default Artist;
