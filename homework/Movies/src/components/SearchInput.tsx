interface Props {
  handleSearch: (e: string) => void;
}

const SearchInput = ({ handleSearch }: Props) => {
  return (
    <input
      type="text"
      placeholder="Movie name"
      onChange={(e) => {
        handleSearch(e.target.value.toLowerCase());
      }}
    />
  );
};

export default SearchInput;
