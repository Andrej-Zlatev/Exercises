import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import SearchInput from "../components/SearchInput";
import { Movie } from "../types";

const HomePage = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=25feb245&s=${searchMovie}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setMovies([]);
      });
  }, [searchMovie]);

  return (
    <div>
      <SearchInput handleSearch={setSearchMovie} />
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
