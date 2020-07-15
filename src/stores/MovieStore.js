import { decorate, observable } from "mobx";
import movies from "../movies";

class MovieStore {
  movies = movies;

  deleteMovie = (movieId) => {
    this.movies = this.movies.filter((movie) => movie.id !== +movieId);
  };

  watchMovie = (watchedMovie) => {
    const movie = this.movies.find((movie) => movie.id === watchedMovie.id);

    movie.watched = !movie.watched;
  };
}

decorate(MovieStore, {
  movies: observable,
});

const movieStore = new MovieStore();

export default movieStore;
