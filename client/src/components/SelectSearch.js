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
    if (!searchTerm) return this.setState({ filteredGames: [] });

    const filteredItems = this.props.options.filter(
      createFilter(this.state.searchTerm, ['name'])
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
        <ul className="results">
          {filteredItems.map(item => (
            <li onClick={() => this.selectItem(item)} key={item[identifier]}>
              {item[labelName]}
            </li>
          ))}
        </ul>
        {/* <label className="question">Your selections</label> */}
        <ul className="selected">
          {selectedItems.map(item => (
            <li key={item[identifier]}>{item[labelName]}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SelectSearch;
