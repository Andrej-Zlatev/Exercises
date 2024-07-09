interface SearchProps {
  setSearchTerm: (e: string) => void;
}

const Search = ({ setSearchTerm }: SearchProps) => {
  return (
    <div>
      <input
        type="text"
        placeholder="write text.."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
