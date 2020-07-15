import React from "react";
import movies from "../movies";
import { WatchWrapper, WatchedWrapper, ListWrapper } from "../styles";
import WatchItem from "./WatchItem";
import { observer } from "mobx-react";
import movieStore from "../stores/MovieStore";
import AddButton from "./Buttons.js/AddButton";

const WatchList = () => {
  const WatchList = movieStore.movies
    .filter((movie) => movie.watched === true)
    .map((movie) => <WatchItem movie={movie} key={movie.id} />);

  const WatchedList = movieStore.movies
    .filter((movie) => movie.watched === false)
    .map((movie) => <WatchItem movie={movie} key={movie.id} />);

  return (
    <>
      <AddButton />
      <ListWrapper>
        <div class="list-group">{WatchList}</div>
        <div class="list-group">{WatchedList}</div>
      </ListWrapper>
    </>
  );
};

export default observer(WatchList);
