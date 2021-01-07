import React from 'react';

import {
  SearchResultContiner,
  SearchResultText,
  SearchResultsContainer
} from 'styles/StylesLibrary/Atoms/FormElements/SearchResultsElements/index.js';

const SearchResults = () => {
  return (
    <SearchResultsContainer>
      <SearchResultContiner>
        <SearchResultText>Vijaya Enterprises</SearchResultText>
      </SearchResultContiner>
      <SearchResultContiner>
        <SearchResultText>Hello</SearchResultText>
      </SearchResultContiner>
      <SearchResultContiner>
        <SearchResultText>Hello</SearchResultText>
      </SearchResultContiner>
      <SearchResultContiner>
        <SearchResultText>Hello</SearchResultText>
      </SearchResultContiner>
    </SearchResultsContainer>
  );
};

export default SearchResults;
