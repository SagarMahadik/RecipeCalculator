import React, { useEffect } from 'react';
import {
  RawMMainContainer,
  SearchResultContainer
} from 'styles/Singularity/OwnerView/CafeManagement/RawMaterialManagement';
import StyledTextBoxLabel from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledTextBoxLabel.js';
import {
  useRawMaterialsDispatch,
  useRawMaterialsState
} from '../State/RawMaterialManagementState';

const SearchUpdateSupplier = () => {
  const {
    searchString,
    supplierDetails,

    searchResults
  } = useRawMaterialsState();

  const dispatch = useRawMaterialsDispatch();

  useEffect(() => {
    if (searchString === '') {
      {
        dispatch({
          type: 'CLEAR_SEARCHRESULTS',
          payload: []
        });
      }
    }
  }, [searchString]);

  const handleSearchText = e => {
    let string = e.currentTarget.value;

    {
      dispatch({
        type: 'UPDATE_SEARCHSTRING',
        payload: string
      });
    }

    let searchOptions = supplierDetails
      .filter(
        detail =>
          detail.supplierName.toLowerCase().indexOf(string.toLowerCase()) > -1
      )
      .slice(0, 4);

    {
      dispatch({
        type: 'UPDATE_SEARCHRESULTS',
        payload: searchOptions
      });
    }
  };

  const handleSearchItemClick = item => {
    let supplierName = item.supplierName;
    let supplierID = item._id;

    {
      dispatch({
        type: 'SET_SUPPLIER',
        payload: { supplierName, supplierID }
      });
    }
  };

  return (
    <RawMMainContainer>
      <StyledTextBoxLabel
        name={searchString}
        value={searchString}
        onChange={handleSearchText}
        text="Supplier Name"
      />
      {searchResults.map(result => {
        return (
          <SearchResultContainer onClick={() => handleSearchItemClick(result)}>
            {result.supplierName}
          </SearchResultContainer>
        );
      })}
    </RawMMainContainer>
  );
};

export default SearchUpdateSupplier;
