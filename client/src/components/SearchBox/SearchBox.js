import React, { Fragment, useState, useContext, useEffect } from 'react';
import {
  SearchBar,
  IconContainer,
  SearchBarContainer
} from '../../styles/componentStyles/SearchBox/SearchBox';
import SearchIcon from './SearchIcon';
import SearchResult from './SearchResult';

import GenreFancyItemContext from '../../Context/genreFancyITem/GenreFancyItemContext';

const SearchBox = ({ setDisplayGenreContainer }) => {
  const genreFancyItemContext = useContext(GenreFancyItemContext);

  const { getSearchResults, searchResults } = genreFancyItemContext;

  const [searchText, setSearchText] = useState('');

  const onChange = e => {
    console.log('On change executes');
    var text = e.target.value;
    setSearchText(prevText => {
      return text;
    });
    getSearchResults(searchText);
    console.log(searchResults);
  };

  if (searchText === '') {
    setDisplayGenreContainer(true);
  } else setDisplayGenreContainer(false);

  return (
    <Fragment>
      <SearchBarContainer>
        <SearchBar
          type="text"
          name="searchSting"
          placeholder="  Search Fancyitem..."
          onChange={onChange}
          value={searchText}
        />
      </SearchBarContainer>

      <SearchResult searchText={searchText} />
    </Fragment>
  );
};

export default SearchBox;
