import { Link } from "react-router-dom";
import { Movie } from "../types";

interface Props {
  movies: Movie[];
}

const MovieList = ({ movies }: Props) => {
  return (
    <div>
      {movies.map((movie, index) => (
        <Link to={`/moviedetails/${movie.imdbID}`} key={index}>
          <img src={movie.Poster} alt="" />
          <p key={index}>{movie.Title}</p>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
