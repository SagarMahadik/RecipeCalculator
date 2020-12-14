import React, { useContext } from 'react';
import rawMaterialManagementContext from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/rawMaterialManagementContext.js';
import {
  RawMMainContainer,
  SearchResultContainer
} from 'styles/Singularity/OwnerView/CafeManagement/RawMaterialManagement';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';
import StyledTextBoxLabel from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledTextBoxLabel.js';

const SearchUpdateSupplier = () => {
  const RawMaterialManagementContext = useContext(rawMaterialManagementContext);

  const {
    searchString,
    handleSearchText,
    handleSearchItemClick,
    searchResults
  } = RawMaterialManagementContext;
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
