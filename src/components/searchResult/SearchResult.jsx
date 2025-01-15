import "./SearchResult.css";
const SearchResult = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="containerSearch">
      <input
        className="inputSearch"
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <button className="buttonSearch" onClick={() => setSearchTerm("")}>
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchResult;
