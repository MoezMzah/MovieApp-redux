import "./App.css";
import React, { useState } from "react";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";
import Search from "./Components/Search";

function App() {
  // const [searchInput, setSearchInput] = useState("");
  // const handleSearch = (searchInput) => {
  //   setSearchInput(searchInput);
  // };
  // const [rating, setRating] = useState(0);

  // const handleRate = (newrate) => setRating(newrate);
  // const Addmovie = (newMovie) => {
  //   return setMovieliste([...movieliste, newMovie]);
  // };

  return (
    <>
      <MovieList />
      <AddMovie />
      <Search />
    </>
    /* <Search
        rate={rating}
        handleRate={handleRate}
        handleSearch={handleSearch}
      />
      <MovieList
        Movies={
          searchInput
            ? movieliste.filter((movie) =>
                movie.title.toLowerCase().includes(searchInput.toLowerCase())
              )
            : rating
            ? movieliste.filter((movie) => movie.Rate >= rating)
            : movieliste
        }
      />
      <AddMovie addMovie={Addmovie} />
    </> */
  );
}

export default App;
