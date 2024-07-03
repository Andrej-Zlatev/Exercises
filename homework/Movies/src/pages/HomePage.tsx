import MovieList from "../components/MovieList";
import SearchInput from "../components/SearchInput";

const HomePage = () => {
  const movieList = [
    {
      title: "Lord of the rings",
      year: 2005,
    },
    {
      title: "Lord of war",
      year: 2007,
    },
  ];

  return (
    <div>
      <SearchInput />
      <MovieList movieList={movieList} />
    </div>
  );
};

export default HomePage;
