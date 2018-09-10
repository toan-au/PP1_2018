import React from 'react';

const SelectSearch = ({}) => {
  return (
    <div className="SelectSearch">
      <SearchInput
        placeholder="Start typing to search"
        className="search-input"
        onChange={this.onGameSearch}
      />
      <ul className="results">
        {filteredGames.map(game => (
          <li onClick={() => this.selectGame(game)} key={game.name}>
            {game.name}
          </li>
        ))}
      </ul>
      <h4 className="question">your games</h4>
      <ul className="selected">
        {selectedGames.map(selected => (
          <li key={selected.name}>{selected.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SelectSearch;
