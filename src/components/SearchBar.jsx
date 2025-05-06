const SearchBar = ({ search, onChange }) => (
    <input
      type="text"
      placeholder="Buscar filme..."
      value={search}
      onChange={(e) => onChange(e.target.value)}
      className="search-bar"
    />
  );
  
  export default SearchBar;