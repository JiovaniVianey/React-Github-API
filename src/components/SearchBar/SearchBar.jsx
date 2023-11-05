import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.scss';

function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchText);
  };

  return (
    <div className="ui action input">
      <input
        type="text"
        placeholder="Rechercher un repo sur GitHub..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch(e);
          }
        }}
      />
      <button type="submit" className="ui button" onClick={handleSearch}>
        Rechercher
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
