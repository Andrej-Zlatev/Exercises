import { Movie } from "../types";

interface Props {
  movieList: Movie[];
}

const MovieList = ({ movieList }: Props) => {
  return (
    <div>
      {movieList.map((movie, index) => (
        <p key={index}>{movie.title}</p>
      ))}
    </div>
  );
};

export default MovieList;
