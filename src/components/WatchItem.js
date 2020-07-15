import React from "react";
import { Title } from "../styles";
import WatchedButton from "./Buttons.js/WatchedButton";
import DeleteButton from "./Buttons.js/DeleteButton";

const WatchItem = ({ movie }) => {
  return (
    <>
      <Title className="list-group-item list-group-item-action">
        {movie.name}
      </Title>
      <WatchedButton movie={movie} /> <DeleteButton movieId={movie.id} />
    </>
  );
};

export default WatchItem;
