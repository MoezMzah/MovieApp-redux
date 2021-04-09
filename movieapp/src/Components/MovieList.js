import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const MovieList = () => {
  const movielist = useSelector((state) => state.MovieList);
  const inputSearch = useSelector((state) => state.inputSearch);
  const rate = useSelector((state) => state.inputRate);
  const filtrage = (movies, str, rate) => {
    return str
      ? movies.filter((movie) =>
          movie.title.toUpperCase().includes(str.toUpperCase())
        )
      : rate
      ? movies.filter((movie) => movie.Rate >= rate)
      : movies;
  };
  const MovieListe = filtrage(movielist, inputSearch, rate);
  return (
    <div className="movie">
      {MovieListe.map((movie, i) => (
        <MovieCard movie={movie} key={i} />
      ))}
    </div>
  );
};

export default MovieList;
