import React, { Component } from 'react';
import SearchInput, { createFilter } from 'react-search-input';

class SelectSearch extends Component {
  state = {
    searchTerm: '',
    filteredItems: [],
    selectedItems: []
  };

  onSearch = searchTerm => {
    this.setState({ searchTerm });

    // filteredGames should be nothing if no searchterm is provided
    if (!searchTerm) return this.setState({ filteredItems: [] });

    const filteredItems = this.props.options.filter(
      createFilter(this.state.searchTerm, [this.props.labelName])
    );

    this.setState({ filteredItems });
  };

  selectItem = item => {
    const {
      identifier,
      input: { onChange }
    } = this.props;
    if (
      this.state.selectedItems.filter(g => item[identifier] === g[identifier])
        .length < 1
    ) {
      this.setState({ selectedItems: [...this.state.selectedItems, item] });
      onChange(this.state.selectedItems);
    }
  };

  render() {
    const { options, identifier, labelName } = this.props;
    const { filteredItems, selectedItems } = this.state;
    return (
      <div className="SelectSearch">
        <SearchInput
          placeholder="Start typing to search"
          className="search-input"
          onChange={this.onSearch}
        />
        <div className="listTitle">
          <ul className="results">
            <li className="glist"> Searched Games</li>
          </ul>
          <ul className="select">
            <li>Selected Games</li>
          </ul>
        </div>
        <div className="gameList">
          <ul className="results">
            {filteredItems.map(item => (
              <li onClick={() => this.selectItem(item)} key={item[identifier]}>
                {item[labelName]}
              </li>
            ))}
          </ul>
          <ul className="select">
            {selectedItems.map(item => (
              <li key={item[identifier]}>{item[labelName]}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default SelectSearch;
