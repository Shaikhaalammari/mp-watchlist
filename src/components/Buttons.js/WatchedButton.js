import React, { useState } from "react";
import { WatchButtonStyled } from "../../styles";
import movieStore from "../../stores/MovieStore";

const WatchedButton = ({ movie }) => {
  return (
    <>
      <WatchButtonStyled onClick={() => movieStore.watchMovie(movie)}>
        Watched
      </WatchButtonStyled>
    </>
  );
};

export default WatchedButton;
