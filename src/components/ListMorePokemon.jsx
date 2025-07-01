function ListMorePokemon({ limit, onInputChange, handleFetchMore }) {
  return (
    <div className="button-container">
      <input
        type="number"
        value={limit}
        onChange={onInputChange}
        placeholder="Số lượng Pokemon"
        id="limit-input"
      />
      <button id="watch-more" onClick={handleFetchMore}>
        Xem Thêm
      </button>
    </div>
  );
}

export default ListMorePokemon;
