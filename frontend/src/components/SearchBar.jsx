[6:27 pm, 25/7/2026] Kavana🌙: ;
[6:30 pm, 25/7/2026] Kavana🌙: function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="🔍 Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;